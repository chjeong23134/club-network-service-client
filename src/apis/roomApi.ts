import Axios, {AxiosInstance} from "axios";

const axios: AxiosInstance = Axios.create({
    baseURL: "/rooms"
});

export interface RoomType {
	readonly id: number;
	readonly name: string;
	readonly createBy: number;
	readonly createDate: Date;
	readonly updateDate: Date;
}

export async function getRoomList(
	jwt: string,
	userId: number
): Promise<RoomType[]> {
	return await axios
		.get("", {
            params: {
                userId: userId,
            },
			headers: {
                Authorization: `Bearer ${jwt}`,
				'Access-Control-Allow-Origin': '*'
            },
		}).then((res) => res.data);
}