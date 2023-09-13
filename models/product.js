import mongoose from 'mongoose';

const {Schema, model} = mongoose;


const Product = model('product', productSchema);
