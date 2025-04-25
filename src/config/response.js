
const successResponse = (res, data, msg="Request was successful") => {
    return res.status(200).json({
        status: "success",
        statusCode: 200,
        data,
        msg,
    });
}

const errorResponse = (res, error, msg="Request failed") => {
    return res.status(500).json({
        status: "error",
        statusCode: 500,
        error,
        msg,
    });
}

const notFoundResponse = (res, msg="Resource not found") => {
    return res.status(404).json({
        status: "error",
        statusCode: 404,
        msg,
    });
}

const invalidData = (res, msg="Invalid data") => {
    return res.status(400).json({
        status: "error",
        statusCode: 400,
        msg,
    });
}

export { successResponse, errorResponse, notFoundResponse ,invalidData};