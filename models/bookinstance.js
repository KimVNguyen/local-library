var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookInstanceSchema = new Schema(
    {
        book:{ type:Schema.Types.ObjectId, ref:'Book', required:true},
        imprint:{type: String, reuired: true},
        status:{type: String, required: true, enum:['Avaailable', 'Maintenance', 'Loaned', 'Reserved'], default: 'Maintenance'},
        due_back:{type: Date, default: Date.now}
    }
);

// Virtual for bookinstance's URL
BookInstance
.virtual('url')
.get(function(){
    return '/catalog/bookinstance/' + this._id;
});

modules.exports = mongoose.model('BookInstance', BookInstanceSchema)