
const successResponse = (res, data, msg="Request was successful") => {
    res.status(200).json({
        status: "success",
        statusCode: 200,
        data,
        msg,
    });
}

const errorResponse = (res, error, msg="Request failed") => {
    res.status(500).json({
        status: "error",
        statusCode: 500,
        error,
        msg,
    });
}

const notFoundResponse = (res, msg="Resource not found") => {
    res.status(404).json({
        status: "error",
        statusCode: 404,
        msg,
    });
}

const invalidData = (res, msg="Invalid data") => {
    res.status(400).json({
        status: "error",
        statusCode: 400,
        msg,
    });
}

export { successResponse, errorResponse, notFoundResponse ,invalidData};