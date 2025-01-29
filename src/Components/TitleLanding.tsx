type TitleLandingProps = {
    title: string;
};

function TitleLanding({ title }: TitleLandingProps) {
    if (title) {
        return (
        <div className="text-5xl">
            {title}
        </div>
        );
    }
    return null;
}

export default TitleLanding;
