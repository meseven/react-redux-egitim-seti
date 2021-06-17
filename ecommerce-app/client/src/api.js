import axios from "axios";

export const fetchProductList = async ({ pageParam = 1 }) => {
	const { data } = await axios.get(
		`${process.env.REACT_APP_BASE_ENDPOINT}/product?page=${pageParam}`
	);

	return data;
};

export const fetchProduct = async (id) => {
	const { data } = await axios.get(
		`${process.env.REACT_APP_BASE_ENDPOINT}/product/${id}`
	);

	return data;
};

export const fetchRegister = async (input) => {
	const { data } = await axios.post(
		`${process.env.REACT_APP_BASE_ENDPOINT}/auth/register`,
		input
	);

	return data;
};
