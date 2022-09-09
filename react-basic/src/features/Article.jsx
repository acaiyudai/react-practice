import {useState} from 'react';
import PublishButton from './PublishButton';

const Article = (props) => {
    const [isPublished, setIsPublished] = useState(false);
    console.log(isPublished);
    const publishArticle = () => {
        setIsPublished(true);
    }


    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <PublishButton isPublished={isPublished} onClick={() => publishArticle()} />
        </div>
    );
}
export default Article;