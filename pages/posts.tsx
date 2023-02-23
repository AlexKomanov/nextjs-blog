import SimpleAccordion, {ISimpleAccordionItem} from "@/src/components/general-ui-components/SimpleAccordion"
import SnackbarComponent from "@/src/components/general-ui-components/SnackbarComponent";
import IPost from "@/src/types/IPost";
import {getServerAbsoluteUrl} from "@/src/utils/server/serverUtils";
import {AlertColor} from "@mui/material";
import path from "path";
import {FC} from "react"

interface IProps {
    posts: IPost[];
    severity: AlertColor;
    message: string;
}

export async function getStaticProps() {

    let props: IProps = {
        posts: [],
        severity: "success",
        message: ""
    };

    let {posts, severity, message} = props;

    // get posts
    const url = path.join(getServerAbsoluteUrl(), '/api/posts');

    try {
        const response = await fetch(url);
        posts = await response.json();
        severity = "success";
        message = "Fetch Succeeded!"
    } catch (error) {
        console.error(error);
        severity = "error";
        message = "Fetch Error!"

    }

    return {
        props: {posts, severity, message},
    }
}


const Posts: FC<IProps> = ({posts, severity, message}) => {

    const allPosts: ISimpleAccordionItem[] = posts.map(post => {
        return {
            summary: post.title,
            details: post.body
        }
    })

    return (
        <>
            <h2 className='text-2xl font-extrabold mt-3 text-center mb-5'>Posts</h2>
            {(severity === "error") &&
                <SnackbarComponent isOpen={true} duration={5000} severity={severity} message={message}/>}
            <SimpleAccordion items={allPosts}/>
        </>
    )
}

export default Posts