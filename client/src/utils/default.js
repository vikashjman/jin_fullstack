export const generate_unique_id = () => {
    const id = "id" + Math.random().toString(16).slice(2);
    return id;
};

export const getDefaultBauValues = () => ({
    work_id: generate_unique_id(),
    project_id: 1,
    task_id: 1,
    comment: "",
    mon: "",
    tue: "",
    wed: "",
    thrus: "",
    fri: "",
    sat: "",
    sun: "",
    activity_type: "BAU"
})

export const getDefaultSalesValues= () => ({
    work_id: generate_unique_id(),
    project_id: 8,
    task_id: 25,
    comment: "",
    mon: "",
    tue: "",
    wed: "",
    thrus: "",
    fri: "",
    sat: "",
    sun: "",
    activity_type: "SALES"
})

