import Brand from "../models/category";
import Product from "../models/product";
export const getAll = async (req, res) => {
  try {
    // gửi request từ server nodes -> json-server
    const category = await Category.find();
    // Nếu mảng không có sản phẩm nào thì trả về 404
    if (category.length === 0) {
      res.status(404).json({
        message: "Không có danh mục  nào",
      });
    }
    // Nếu có sản phẩm thì trả về 200 và mảng sản phẩm
    return res.status(200).json(category);
  } catch (error) {
    // Nếu có lỗi thì trả về 500 và lỗi
    return res.status(500).json({
      message: error,
    });
  }
};
export const get = async (req, res) => {
  try {
    const brand = await Brand.findById(req.params.id).populate("products");
    if (!brand) {
      return res.status(404).json({
        message: "Không tìm thấy sản phẩm",
      });
    }
    const products = await Product.find({ brandId: req.params.id });
    return res.status(200).json({
      message: "Product found",
      ...brand.toObject(),
      data: products,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Lỗi server",
    });
  }
};
export const create = async (req, res) => {
  try {
    const brand = await Brand.create(req.body);
    if (!brand) {
      return res.status(400).json({
        message: "Không thể tạo danh muc",
      });
    }
    return res.status(201).json({
      message: "Tạo danh mục thành công",
      data: brand,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};
export const remove = async (req, res) => {
  try {
    await Brand.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      message: "Danh mục đã được xóa thành công",
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

export const update = async (req, res) => {
  try {
    const brand = await Brand.findByIdAndUpdate(req.params.id, req.body);
    if (!brand) {
      return res.status(404).json({
        message: "Không tìm thấy danh mục",
      });
    }
    return res.status(200).json({
      message: "Danh mục đã được cập nhật thành công",
      data: brand,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};
