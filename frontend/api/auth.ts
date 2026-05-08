import { GetTransactionsParamsType, LoginCredentials, LoginResponse, TransactionType, User, UserCredentials } from "@/types/interfaces";
import axios from "axios";

export interface ResponseType<T = unknown> {
	success: boolean;
	error: any;
	data?: T;
}

const BASEURL = process.env.NEXT_PUBLIC_BASEURL;


export const register = async (payload: UserCredentials): Promise<ResponseType<User>> => {
	try{
    console.log("Fetch function executed!");
	const res = await axios.post(BASEURL + "/api/v1/register", payload);
    return {
		success: true,
        error: null,
		data: res.data,
    };
} catch (err) {
	return {
		success: true,
        error: err,
	};
}

};

export const login = async (payload:LoginCredentials ): Promise<ResponseType<LoginResponse>> => {
	try {
    console.log("Fetch function executed!");
	const res = await axios.post(BASEURL + "/api/v1/login", payload);

	return {        
		success: true,
		error: null,
		data: res.data,
    };
    } catch (err) {
	return {
		success: true,
        error: err,
	};
}
};



