import "../styles/Faq.css";
export default function FAQ(params) {
  return (
    <>
      <div className="faq_head">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h4>FAQ</h4>
              <p>
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="faq_bottom">
        <div className="container">
          <div className="row">
            <div className="faq_top">
              <h6>How do I add a new question?</h6>
              <p>
                To add a new question go to app settings and press "Manage
                Questions" button.
              </p>
              <h4>Can I insert pictures in my FAQ?</h4>
              <span>Yes! To add a picture follow these simple steps:</span>
              <ol>
                <li>Enter App Settings</li>
                <li>Click the "Manage Questions" button</li>
                <li>
                  Click on the question you would like to attach a picture to
                </li>
                <li>
                  When editing your answer, click on the picture icon and then
                  add an image from your library
                </li>
              </ol>

              <h6>How do I add a new question?</h6>
              <p>
                To add a new question go to app settings and press "Manage
                Questions" button.
              </p>
              <h4>Can I insert pictures in my FAQ?</h4>
              <span>Yes! To add a picture follow these simple steps:</span>
              <ol>
                <li>Enter App Settings</li>
                <li>Click the "Manage Questions" button</li>
                <li>
                  Click on the question you would like to attach a picture to
                </li>
                <li>
                  When editing your answer, click on the picture icon and then
                  add an image from your library
                </li>
              </ol>
              <h6>How do I edit or remove the "FAQ title"?</h6>
              <h2>
                The FAQ title can be adjusted in the settings tab of the App
                Settings. You can also remove the title by unchecking its
                checkbox in the settings tab.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
