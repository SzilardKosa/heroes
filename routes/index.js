const authMW = require('../middlewares/auth/authMW');
const loginMW = require('../middlewares/auth/loginMW');
const handleAlertMW = require('../middlewares/auth/handleAlertMW');
const registerMW = require('../middlewares/auth/registerMW');
const logoutMW = require('../middlewares/auth/logoutMW');
const renderMW = require('../middlewares/renderMW');
const getKidsMW = require('../middlewares/kid/getKidsMW');
const getKidMW = require('../middlewares/kid/getKidMW');
const saveKidMW = require('../middlewares/kid/saveKidMW');
const delKidMW = require('../middlewares/kid/delKidMW');
const getApplicationsMW = require('../middlewares/application/getApplicationsMW');
const getApplicationMW = require('../middlewares/application/getApplicationMW');
const saveApplicationMW = require('../middlewares/application/saveApplicationMW');
const updateApplicationMW = require('../middlewares/application/updateApplicationMW');
const delApplicationMW = require('../middlewares/application/delApplicationMW');
const getUsersMW = require('../middlewares/user/getUsersMW');
const getUserMW = require('../middlewares/user/getUserMW');
const saveUserMW = require('../middlewares/user/saveUserMW');
const delUserMW = require('../middlewares/user/delUserMW');

const KidModel = require('../models/kid');
const UserModel = require('../models/user');
const ApplicationModel = require('../models/application');

const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

module.exports = function (app, rootDir) {
  const objRepo = {
      KidModel: KidModel,
      UserModel: UserModel,
      ApplicationModel: ApplicationModel
  };

  app.get('/',
      handleAlertMW(objRepo),
      renderMW(objRepo, 'index'));
  app.post('/register',
      upload.single('profile'),
      registerMW(objRepo),
      renderMW(objRepo, 'index'));
  app.post('/login',
      loginMW(objRepo),
      renderMW(objRepo, 'index'));
  app.use('/logout',
      logoutMW(objRepo));

  app.use('/images/:id',
        function(req, res, next){
            res.sendFile(`${rootDir}/uploads/${req.params.id}`, {
                headers: {
                    'content-type':'image/png'
                }
            });
        });
  
  app.get('/kids',
      authMW(objRepo, 'both'),
      handleAlertMW(objRepo),
      getKidsMW(objRepo),
      renderMW(objRepo, 'kidslist'));
  app.get('/kids/details/:kidID',
      authMW(objRepo, 'user'),
      getKidMW(objRepo),
      renderMW(objRepo, 'kidsdetails'));
  app.use('/kids/new',
      authMW(objRepo, 'admin'),
      upload.single('profile'),
      saveKidMW(objRepo),
      renderMW(objRepo, 'kidseditnew'));
  app.use('/kids/edit/:kidID',
      authMW(objRepo, 'admin'),
      getKidMW(objRepo),
      upload.single('profile'),
      saveKidMW(objRepo),
      renderMW(objRepo, 'kidseditnew'));
  app.get('/kids/del/:kidID',
      authMW(objRepo, 'admin'),
      getKidMW(objRepo),
      delKidMW(objRepo));
  
  app.get('/applications',
      authMW(objRepo, 'both'),
      getApplicationsMW(objRepo),
      renderMW(objRepo, 'applications'));
  app.get('/applications/new/:kidID',
      authMW(objRepo, 'user'),
      getUserMW(objRepo),
      getKidMW(objRepo),
      saveApplicationMW(objRepo));
  app.post('/applications/edit/:appID',
      authMW(objRepo, 'admin'),
      getApplicationMW(objRepo),
      updateApplicationMW(objRepo));
  app.get('/applications/del/:appID',
      authMW(objRepo, 'both'),
      getApplicationMW(objRepo),
      delApplicationMW(objRepo));
  
  app.get('/profile/del',
      authMW(objRepo, 'user'),
      getUserMW(objRepo),
      delUserMW(objRepo));
  app.get('/profile',
      authMW(objRepo, 'user'),
      getUserMW(objRepo),
      renderMW(objRepo, 'profile'));
  app.post('/profile',
      authMW(objRepo, 'user'),
      getUserMW(objRepo),
      upload.single('profile'),
      saveUserMW(objRepo),
      renderMW(objRepo, 'profile'));
  
  app.get('/users',
      authMW(objRepo, 'admin'),
      getUsersMW(objRepo),
      renderMW(objRepo, 'users'));
  app.get('/users/:userID',
      authMW(objRepo, 'admin'),
      getUserMW(objRepo),
      renderMW(objRepo, 'usersdetails'));
  app.get('/users/:userID/del',
      authMW(objRepo, 'admin'),
      getUserMW(objRepo),
      delUserMW(objRepo));
    
};