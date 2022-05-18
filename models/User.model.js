const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    password: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
    },
    role: {
      type: String,
      enum: ['USER', 'ADMIN'],
      default: 'USER'
    },
    modality: {
      type: String,
      enum: ['WINKER', 'WINKER-PREMIUM'],
      default: 'WINKER'
    },
    boughtExperiences: {
      type: String,
      ref: 'Experience',
    },
    dates: {
      type: Schema.Types.ObjectId,
      ref: 'Date',
    },
    birth: {
      type: Date,
      // required: [true, "You must be at least 18 years old to use Wink"],
    },
    identity: {
      type: String,
      enum: ['Man', 'Woman', 'Non-binary', 'Gender-fluid', 'Other'],
    },
    profileImg: {
      type: String,
      default: "https://i.stack.imgur.com/l60Hf.png",
      required: [true, " We accept JPGs and PNGs of at least 500x500px"],
    },
    city: {
      type: String,
      required: [true, "We need your location to show who’s nearby"],
    },
    interestedGender: {
      type: String,
      enum: ['Men', 'Women', 'Everyone'],
    },
    matches: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }],
    lovers: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }],
    gallery: [{
      type: String,
    }],
    features: {
      height: {
        type: Number,
      },
      exercise: {
        type: String,
        enum: ['Active', 'Sometimes', 'Almost never'],
      },
      zodiac: {
        type: String,
        enum: ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Saggitarius', 'Capricorn', 'Aquarius', 'Pisces'],
      },
      education: {
        type: String,
        enum: ['High School', 'In college', 'Undergraduate degree', 'Graduate degree', 'Postgraduate studies'],
      },
      drink: {
        type: String,
        enum: ['Socially', 'Never', 'Frequently'],
      },
      smoke: {
        type: String,
        enum: ['Socially', 'Never', 'Regularly'],
      },
      lookingFor: {
        type: String,
        enum: ["Met new people", "Something casual", "Love relationship", "Don't know yet"],
      },
      children: {
        type: String,
        enum: ["Want someday", "Don't want", "Have and want more", "Have and don't want more", "Not sure yet"],
      },
      religion: {
        type: String,
        enum: ["Agnostic", "Religious", "Spiritual", "Atheist"],
      },
      political: {
        type: String,
        enum: ["Apolitical", "Moderate", "Liberal", "Conservative"],
      },
    }
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);
module.exports = User;