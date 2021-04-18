const expect = require('chai').expect;
const getKidMW = require('../../../../middlewares/kid/getKidMW');

describe('getKidMW middleware ', function () {

    it('should set res.locals.kid with a kid object from db', function (done) {
        const mw = getKidMW({
            KidModel: {
                findOne: (p1, cb) => {
                    expect(p1).to.be.eql({ _id: '123'});
                    cb(undefined,'mockKid');
                }            
            }
        });

        const resMock = {
            locals: {}
        };

        mw(
            {
                params: {
                    kidID: '123'
                }
            },
            resMock,
            (err) => {
                expect(err).to.be.eql(undefined);
                expect(resMock.locals).to.be.eql({ kid: 'mockKid'});
                done();
            }
        );
    });
    it('should call next with error when there is a db problem', function (done) {
        const mw = getKidMW({
            KidModel: {
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
                    kidID: '123'
                }
            },
            resMock,
            (err) => {
                expect(err).to.be.eql('dbhiba');
                done();
            }
        );
    });
    it('should call next when no kid found in the db', function (done) {
        const mw = getKidMW({
            KidModel: {
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
                    kidID: '123'
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