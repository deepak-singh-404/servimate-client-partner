import axios from 'axios'
const url = "https://servimate-partner.herokuapp.com"
const local_url = ""


export const setLoader = (data) => {
    return {
        type: "SET_LOADER",
        payload: data
    }
}

const setJobs = (data) => {
    return {
        type: "SET_JOBS",
        payload: data
    }
}


export const partnerLogin = (cred, cb) => {
    return async (dispatch) => {
        try {
            dispatch(setLoader(true))
            const { data } = await axios({
                method: "Post",
                url: url + "/dev/api/v1/job",
                data: cred
            })
            dispatch(setLoader(false))
            if (data.success) {
                dispatch(setJobs(data.response))
                if (cb) {
                    cb()
                }
            }
        }
        catch (err) {
            dispatch(setLoader(false))
            alert(JSON.stringify(err))
            console.log("Error in partnerLogin Action", err.message)
        }
    }
}


export const jobDone = (cred, cb) => {
    return async (dispatch) => {
        try {
            dispatch(setLoader(true))
            const { data } = await axios({
                method: "Post",
                url: url + "/dev/api/v1/jobDone",
                data: cred
            })
            dispatch(setLoader(false))
            if (data.success) {
                cb()
            }
        }
        catch (err) {
            dispatch(setLoader(false))
            alert(JSON.stringify(err))
            console.log("Error in jobDone Action", err.message)
        }
    }
}






