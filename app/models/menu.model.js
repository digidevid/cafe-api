module.exports = (mongoose) => {
	const schema = mongoose.Schema(
		{
			name: String,
			type: Number,
			price: Number,
			isAvailable: Boolean,
			isNewMenu: Boolean,
			isBest: Boolean,
			createdAt: Date,
		},
		{ timestamps: true }
	);

	schema.method('toJSON', function () {
		const { __v, _id, ...object } = this.toObject();
		object.id = _id;
		return object;
	});

	const Menu = mongoose.model('menus', schema);
	return Menu;
};
