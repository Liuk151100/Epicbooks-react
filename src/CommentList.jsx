import { useMemo } from "react";

function CommentList(data) {
    console.log(data)

    const commentlist = useMemo(() => {

        return data.map((comments) => (
            <Card>
                <h2> {comments.comment} </h2>
                <Card.Body>This is some text within a card body.</Card.Body>
            </Card>
        ));
    }, [data]);

    return (
        <>
            {/* <Card>
                <h2> {data.comment} </h2>
                <Card.Body>This is some text within a card body.</Card.Body>
            </Card> */}

            <div className='d-flex justify-content-center' style={{ flexWrap: 'wrap' }}>
                {commentlist}
            </div>
        </>
    )
}

export default CommentList