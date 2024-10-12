"use server";

import supabase from "@/services/supabase";

export async function getProducts() {
  const { data: products, error } = await supabase.from("products").select("*");

  if (error) {
    console.error(error);
    throw new Error("Products could not be loaded");
  }

  return products;
}

export async function getProduct(productId: number) {
  const { data: productById, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", productId);

  if (error) {
    console.error(error);
    throw new Error("Product could not be loaded");
  }

  return productById;
}
