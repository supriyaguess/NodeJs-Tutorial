const express = require("express");
const {handleGetAllUsers, 
    handleGetUserById,
    handleGetUpdateUserById, 
    handleGetDeleteUserById,
    handleCreateNewUser
} = require('../controllers/user');

const router = express.Router();



//REST API Routes (JSON R   esponse)
router.route("/")
.get(handleGetUserById)
.post(handleCreateNewUser);

router
   .route("/:id")
   .get(handleGetUserById)
   .patch(handleGetUpdateUserById)
   .delete(handleGetDeleteUserById)

module.exports = router;