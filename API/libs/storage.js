const multer = require('multer');
const multerS3 = require('multer-s3'); 
const aws = require('aws-sdk');
require('dotenv').config();

aws.config.update({
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.ACCESS_SECRET_KEY,
  region: process.env.REGION
  })
  
const BUCKET = process.env.BUCKET;
const s3 = new aws.S3();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'API/storage/imgs')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, `${file.fieldname}-${uniqueSuffix}.png`)
    }
  })


  const upload = multer({ 
    storage:multerS3({
      bucket:BUCKET,
      s3:s3,
      acl: "public-read",
      key:(req,file, cb)=>{
        cb(null,file.originalname);
    }
    }) 
  

  });

module.exports = upload;