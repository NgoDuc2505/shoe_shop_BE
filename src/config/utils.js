const logRoute = (baseRoute, endpoint) => {
    const fullRoute = `${baseRoute}${endpoint}`;
    console.log(`Route: ${fullRoute}`);
}

const copyRight = "© Ngo Minh Duc, Tran Quoc Si, Dang Van Rin, Ngo Van Bao An - VKU - Shoeshop API";

export {logRoute, copyRight}