// userData.js
import mongoose from "mongoose";

const userDataSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Relación con la colección 'users'
      required: true,
    },
    // Campo dinámico (sin estructura fija)
    content: {
      type: mongoose.Schema.Types.Mixed,
      default: {}, // Puede ser cualquier JSON: objeto, array, string, etc.
    },
    // Metadata opcional para organizar/consultar después
    metadata: {
      dataType: String, // ej: "friends", "contacts", "notes"
      tags: [String], // ej: ["work", "important"]
    },
  },
  { timestamps: true } // Crea automáticamente createdAt/updatedAt
);

export default mongoose.model("UserData", userDataSchema);
