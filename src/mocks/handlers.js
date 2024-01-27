import { rest } from "msw";

const baseURL = "https://drf-walk-app-4288386a2e75.herokuapp.com/";

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(
            ctx.json({
                "pk": 3,
                "username": "alexandra",
                "email": "",
                "first_name": "",
                "last_name": "",
                "profile_id": 3,
                "profile_image": "https://res.cloudinary.com/dsikpybop/image/upload/v1/media/../default_profile_m2rn8r"
            })
        );
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req,res,ctx) => {
        return res(ctx.status(200));
    }),
];