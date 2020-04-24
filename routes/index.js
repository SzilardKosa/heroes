const authMW = require('../middlewares/auth/authMW');
const checkLoginMW = require('../middlewares/auth/checkLoginMW');
const handleWrongFormMW = require('../middlewares/auth/handleWrongFormMW');
const renderMW = require('../middlewares/renderMW');
const getKidsMW = require('../middlewares/kid/getKidsMW');
const getKidMW = require('../middlewares/kid/getKidMW');
const saveKidMW = require('../middlewares/kid/saveKidMW');
const delKidMW = require('../middlewares/kid/delKidMW');
const getApplicationsMW = require('../middlewares/application/getApplicationsMW');
const getApplicationMW = require('../middlewares/application/getApplicationMW');
const saveApplicationMW = require('../middlewares/application/saveApplicationMW');
const delApplicationMW = require('../middlewares/application/delApplicationMW');
const getUsersMW = require('../middlewares/user/getUsersMW');
const getUserMW = require('../middlewares/user/getUserMW');
const saveUserMW = require('../middlewares/user/saveUserMW');
const delUserMW = require('../middlewares/user/delUserMW');

const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

module.exports = function (app) {
  const objRepo = {};

  app.get('/',
      handleWrongFormMW(objRepo),
      renderMW(objRepo, 'index'));
  app.post('/register',
      saveUserMW(objRepo));
  app.post('/login',
      checkLoginMW(objRepo));
  
  app.get('/kids',
      authMW(objRepo, 'both'),
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
  app.post('/applications/new',
      authMW(objRepo, 'user'),
      saveApplicationMW(objRepo));
  app.post('/applications/edit/:appID',
      authMW(objRepo, 'admin'),
      getApplicationMW(objRepo),
      saveApplicationMW(objRepo));
  app.get('/applications/del/:appID',
      authMW(objRepo, 'both'),
      getApplicationMW(objRepo),
      delApplicationMW(objRepo));
  

  app.use('/profile',
      authMW(objRepo, 'user'),
      getUserMW(objRepo),
      upload.single('profile'),
      saveUserMW(objRepo),
      renderMW(objRepo, 'profile'));
  app.get('/profile/del',
      authMW(objRepo, 'user'),
      getUserMW(objRepo),
      delUserMW(objRepo));
  
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