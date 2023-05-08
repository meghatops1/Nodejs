 const multerFilter = (req, file, cb) => {
   if (!file.originalname.match(/\.(png|jpg)$/)) {
     cb(null, true);
   } else {
     cb(null, false);
   }
 };
 