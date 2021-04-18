const expect = require('chai').expect;
const getApplicationMW = require('../../../../middlewares/application/getApplicationMW');

describe('getApplicationMW middleware ', function () {

    it('should set res.locals.application with an application object from db', function (done) {
        const mw = getApplicationMW({
            ApplicationModel: {
                findOne: (p1, cb) => {
                    expect(p1).to.be.eql({ _id: '123'});
                    cb(undefined,'mockApplication');
                }            
            }
        });

        const resMock = {
            locals: {}
        };

        mw(
            {
                params: {
                    appID: '123'
                }
            },
            resMock,
            (err) => {
                expect(err).to.be.eql(undefined);
                expect(resMock.locals).to.be.eql({ application: 'mockApplication'});
                done();
            }
        );
    });
    it('should call next with error when there is a db problem', function (done) {
        const mw = getApplicationMW({
            ApplicationModel: {
                findOne: (p1, cb) => {
                    expect(p1).to.be.eql({ _id: '123'});
                    cb('dbhiba',null);
                }            
            }
        });

        const resMock = {
            locals: {}
        };

        mw(
            {
                params: {
                    appID: '123'
                }
            },
            resMock,
            (err) => {
                expect(err).to.be.eql('dbhiba');
                done();
            }
        );
    });
    it('should call next when no application found in the db', function (done) {
        const mw = getApplicationMW({
            ApplicationModel: {
                findOne: (p1, cb) => {
                    expect(p1).to.be.eql({ _id: '123'});
                    cb(undefined, null);
                }            
            }
        });

        const resMock = {
            locals: {}
        };

        mw(
            {
                params: {
                    appID: '123'
                }
            },
            resMock,
            (err) => {
                expect(err).to.be.eql(undefined);
                expect(resMock.locals).to.be.eql({});
                done();
            }
        );

    });

});