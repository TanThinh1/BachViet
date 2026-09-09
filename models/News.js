import mongoose from 'mongoose';

const NewsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide a title'],
      maxlength: [200, 'Title cannot be more than 200 characters'],
    },
    description: {
      type: String,
      required: [true, 'Please provide a description'],
    },
    content: {
      type: String,
      required: [true, 'Please provide content'],
    },
    category: {
      type: String,
      enum: ['thong-bao', 'lich-cong-tac', 'tai-nguyen', 'su-kien'],
      default: 'thong-bao',
    },
    author: {
      type: String,
      required: [true, 'Please provide author name'],
    },
    status: {
      type: String,
      enum: ['draft', 'published'],
      default: 'draft',
    },
    featured: {
      type: Boolean,
      default: false,
    },
    views: {
      type: Number,
      default: 0,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.News || mongoose.model('News', NewsSchema);
