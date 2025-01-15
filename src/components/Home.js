
import LeftSide from './LeftSide';
import MiddleSide from './MiddleSide';
import RightSide from './RightSide';

function Home() {
    return (
        <>
            <div className="leftsidehome">
                <LeftSide />
            </div>
            <div className="middleside">
                <MiddleSide />
            </div>
            <div className="rightside">
                <RightSide />
            </div>
        </>
    )
}

export default Home;