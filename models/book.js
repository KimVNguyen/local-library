var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema (
    {
        title: {title: String, required: true},
        author: {type: Schema.Types.ObjectId, ref: 'Author', required: true},
        summary:{type: String, required: true},
        isbn: {type: String, required: true},
        genre: [{type: Schema.Type.ObjectId, ref: 'Genre'}]
    }
);

// Virtual for book's URL
BookSchema
.virtual('url')
.get(function(){
    return '/catalog/book/' + this._id;
});

//Export model
modules.exports = mongoose.model('Book', BookSchema)