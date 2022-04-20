import React, { useState } from "react";
import { Card, Col } from "react-bootstrap";
import comment from "../assets/images/comment.png";
import share from "../assets/images/share.png";
import save from "../assets/images/saved.png";
import save2 from "../assets/images/save-instagram.png";
import upvote from "../assets/images/up-arrow.png";
import upvote2 from "../assets/images/arrow-upward.png";
import InfiniteScroll from "react-infinite-scroller";
function FeedCard({ item }) {
  const [saveimg, setSave] = useState(true);
  const [upvoteimg, setUpvote] = useState(true);
  const { title, tags, link, image } = item;

  const handleShare = async () => {
    if (navigator.canShare) {
      try {
        await navigator.share({ title: "Title of the share", url: "https://google.com" });
      } catch (error) {
        console.error("Share failed:", error.message);
      }
    } else {
      console.log("This is not supported");
    }
  };

  return (
    <InfiniteScroll>
      <Col className="d-flex justify-content-center ">
        <Card className="mt-5 mb-3 text-center" style={{ width: "60%" }}>
          <h2>{title}</h2>
          <a href={link} target="_blank">
            {link}
          </a>
          <Col className="d-flex justify-content-center">
            <img src={image} className="mb-2" width="72%" alt="logo" />
          </Col>
          <div className="mx-5 col-3">
            <div className="d-flex p-3 my-1">
              {upvoteimg ? (
                <div onClick={() => setUpvote(!upvoteimg)} className="mx-2">
                  <img src={upvote} width="20rem" alt="upvote" />
                </div>
              ) : (
                <div onClick={() => setUpvote(!upvoteimg)} className="mx-2">
                  <img src={upvote2} width="20rem" alt="upvote" />
                </div>
              )}
              <div className="mx-3">
                <img src={comment} width="20rem" alt="comment" />
              </div>

              <div className="mx-3" onClick={handleShare}>
                <img src={share} width="20rem" alt="share" />
              </div>

              {saveimg ? (
                <div onClick={() => setSave(!saveimg)} className="mx-3">
                  <img src={save} width="20rem" alt="upvote" />
                </div>
              ) : (
                <div onClick={() => setSave(!saveimg)}>
                  <img src={save2} width="20rem" alt="upvote" />
                </div>
              )}
            </div>
          </div>
        </Card>
      </Col>
    </InfiniteScroll>
  );
}

export default FeedCard;
