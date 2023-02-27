import React, {FC} from 'react'
import path from "path";
import {getServerAbsoluteUrl} from "@/src/utils/server/serverUtils";
import {AlertColor} from "@mui/material";
import ICommentShort from "@/src/types/ICommentShort";
import SnackbarComponent from "@/src/components/general-ui-components/SnackbarComponent";
import {AiOutlineFileAdd, AiOutlineDelete, AiOutlineInfoCircle, AiFillEdit} from "react-icons/ai";

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

    const elements = commentsShort.map((shortComment, i) => (
        <div className="flex justify-between w-3/5 p-4" key={i}>
            <span>{shortComment.description}</span>
            <div className="flex">
                <div className="pr-1 pl-1 cursor-pointer"><AiOutlineDelete/></div>
                <div className="pr-1 pl-1 cursor-pointer"><AiFillEdit/></div>
                <div className="pr-1 pl-1 cursor-pointer"><AiOutlineInfoCircle/></div>


            </div>
        </div>
    ));

    return (
        <div>
            <h2 className='text-2xl font-extrabold mt-3 text-center mb-5'>Comments</h2>
            <div className="cursor-pointer"><AiOutlineFileAdd/> </div>
            {elements}
            {(severity !== "success") &&
                <SnackbarComponent isOpen={true} duration={5000} severity={severity} message={message}/>}
        </div>
    )
}

export default Comments