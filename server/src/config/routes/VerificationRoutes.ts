/// <reference path="../../controllers/VerificationController.ts" />

import express = require("express");
import Verification = require("../../controllers/VerificationController");
import UserModel = require("../../app/model/interfaces/UserModel");

var router = express.Router();

    class VerificationRoutes {
        private verificationLogin: Verification.VerificationLogin<UserModel>;
        private verificationRegister:Verification.VerificationRegister<UserModel>;

        constructor() {
            this.verificationLogin = new Verification.VerificationLogin();
            this.verificationRegister = new Verification.VerificationRegister();
        }

        get routes() {
            var controllerLoginVerification = this.verificationLogin;
            var controllerRegisterVerification = this.verificationRegister;

            router.post("/login", controllerLoginVerification.userVerification);
            router.post("/registration", controllerRegisterVerification.userVerification);

            return router;
        }


    }
    Object.seal(VerificationRoutes);
export = VerificationRoutes;