const logRoute = (baseRoute, endpoint) => {
    const fullRoute = `${baseRoute}${endpoint}`;
    console.log(`Route: ${fullRoute}`);
}

export {logRoute}