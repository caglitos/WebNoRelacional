import UserData from "../models/userData.model.js";
import mongoose from "mongoose";

// Helper para errores
const handleError = (res, error, status = 500, message = "Error interno") => {
  console.error(error);
  return res.status(status).json({ success: false, message });
};

// 1. Obtener todos los documentos del usuario
export const getDatas = async (req, res) => {
  try {
    const documents = await UserData.find({ userId: req.userId }).sort({
      createdAt: -1,
    });
    res.status(200).json({ success: true, data: documents });
  } catch (error) {
    handleError(res, error);
  }
};

// 2. Obtener un documento por ID (solo del usuario actual)
export const getData = async (req, res) => {
  try {
    const { id } = req.params;
    const document = await UserData.findOne({ _id: id, userId: req.userId });

    if (!document) {
      return handleError(res, null, 404, "Documento no encontrado");
    }

    res.status(200).json({ success: true, data: document });
  } catch (error) {
    handleError(res, error);
  }
};

// 3. Crear documento (validación mínima de contenido)
export const createData = async (req, res) => {
  try {
    const { content, metadata } = req.body;

    if (content === undefined) {
      // Validación básica
      return handleError(res, null, 400, "El campo 'content' es requerido");
    }

    const newDocument = await UserData.create({
      userId: req.userId,
      content,
      metadata: metadata || {},
    });

    res.status(201).json({ success: true, data: newDocument });
  } catch (error) {
    handleError(res, error);
  }
};

// 4. Actualizar documento (solo del usuario actual)
export const updateData = async (req, res) => {
  try {
    const { id } = req.params;
    const { content, metadata } = req.body;

    const updatedDoc = await UserData.findOneAndUpdate(
      { _id: id, userId: req.userId }, // Filtro implícito de seguridad
      { content, metadata },
      { new: true }
    );

    if (!updatedDoc) {
      return handleError(res, null, 404, "Documento no encontrado");
    }

    res.status(200).json({ success: true, data: updatedDoc });
  } catch (error) {
    handleError(res, error);
  }
};

// 5. Eliminar documento (solo del usuario actual)
export const deleteData = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedDoc = await UserData.findOneAndDelete({
      _id: id,
      userId: req.userId,
    });

    if (!deletedDoc) {
      return handleError(res, null, 404, "Documento no encontrado");
    }

    res.status(200).json({ success: true, message: "Documento eliminado" });
  } catch (error) {
    handleError(res, error);
  }
};
