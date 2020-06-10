exports.ErrorTypes = {
    GROUP_ALREADY_EXISTS: "GROUP_ALREADY_EXISTS",
    GROUP_SUBGROUP_COMBO_ALREADY_EXISTS: "GROUP_SUBGROUP_COMBO_ALREADY_EXISTS",
    GROUP_DOES_NOT_EXIST: "GROUP_DOES_NOT_EXIST"
}
exports.getCustomError = (errorType, errorMessage = errorType) => {
    const e = new Error(errorMessage)
    e.name = errorType
    return e
}