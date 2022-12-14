import {useState} from 'react';
import {PublishButton} from './index';

const Article = (props) => {
    const [isPublished, setIsPublished] = useState(false);
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