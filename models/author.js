var mongoose = require ('mongoose');
var schema = mongoose.Schema;
var AuthorSchema = new Schema(
    {
        first_name: {type: String, required: true, max:100},
        family_name: {type: String, required:true, max: 100},
        date_of_birth: {type: Date},
        death_of_death: {type: Date}
    }
);

// Virtual for Author's Full Name
AuthorSchema
.virtual('name')
.get(function() {
    // To avoid errors in cases where the author does not have a family name or first name
    // We want to make sure that the execption is handled by returning an empty string

    var fullname = '';
    if (this.first_name && this.family_name) {
        fullname = this.family_name + ',' + this.first_name
    }

    if (!this.first_name || !this.last_name) {
        fullname = '';
    }
});

// Virtual for author's Lifespan
AuthorSchema
.virtual('lifespan')
.get(function(){
    return (ths.date_of_death.getYear() - this.date_of_birth.getYear().toString());
});

//Virtual for author's URL
AuthorSchema
.virtual('url')
.get(function(){
    return '/catalog/author/' + this.id;
});

//Expots Model
module.exports = mongoose.model('Author', AuthorSchema);
