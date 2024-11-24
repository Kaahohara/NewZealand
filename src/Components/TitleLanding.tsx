type TitleLandingProps = {
    title: string;
};

function TitleLanding({ title }: TitleLandingProps) {
    if (title) {
        return (
        <div className="title">
            {title}
        </div>
        );
    }
    return null;
}

export default TitleLanding;
