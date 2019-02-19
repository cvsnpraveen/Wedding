const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    userName: {
        type: String
    },
    password: {
        type: String
    },
    role: {
        type: String
    }
});

var organizationSchema = new mongoose.Schema({
    orgName: {
        type: String
    },
    orgType: {
        type: String
    },
    phone: {
        type: String
    },
    status: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
});

mongoose.model('user', userSchema);
mongoose.model('organization', organizationSchema);
