const PostCategorySchema = (sequelize, DataTypes) => {
  const PostCategoryTable = sequelize.define('PostCategory', {
    categoryId: DataTypes.INTEGER,
    postId: DataTypes.INTEGER,
  },
  {
    tableName: 'posts_categories',
    underscored: true,
    timestamps: false,
  });

  PostCategoryTable.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategoryTable,
      foreignKey: 'post_id',
      otherKey: 'category_id'
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blogPosts',
      through: PostCategoryTable,
      foreignKey: 'category_id',
      otherKey: 'post_id'
    });
  };
  return PostCategoryTable;
};

module.exports = PostCategorySchema;