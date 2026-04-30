import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, path.join(__dirname, '..', 'uploads'));
    }
    ,filename:function(req,file,cb){
        cb(null, uuidv4() + '-'  + file.originalname);
    }
});

const upload = multer({storage:storage});

export default upload;