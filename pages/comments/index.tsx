import React, {FC} from 'react'
import path from "path";
import {getServerAbsoluteUrl} from "@/src/utils/server/serverUtils";
import {AlertColor} from "@mui/material";
import ICommentShort from "@/src/types/ICommentShort";
import SnackbarComponent from "@/src/components/general-ui-components/SnackbarComponent";

interface IProps {
    commentsShort: ICommentShort[];
    severity: AlertColor;
    message: string;

}
export async function getServerSideProps() {

    let props: IProps = {
        commentsShort: [],
        severity: "success",
        message: ""
    }

    let {commentsShort, severity, message} = props;

    // get comments
    const url = path.join(getServerAbsoluteUrl(), '/api/comments');


    try {
        const response = await fetch(url);
        commentsShort = await response.json();
        severity = "success";
        message = "Fetch Succeeded!"
    } catch (error) {
        console.error(error);
        severity = "error";
        message = "Fetch Error!"

    }

    return {
        props: {commentsShort, severity, message},
    }
}

interface IProps {
    commentsShort: ICommentShort[];
    severity: AlertColor;
    message: string;
}

const Comments: FC<IProps> = ({commentsShort, severity, message}) => {

    console.log(commentsShort)

    return (
        <div>
            <h2 className='text-2xl font-extrabold mt-3 text-center mb-5'>Comments</h2>
            {(severity !== "success") &&
                <SnackbarComponent isOpen={true} duration={5000} severity={severity} message={message}/>}
        </div>
    )
}

export default Comments