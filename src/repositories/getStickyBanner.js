const stickyBanner = {
  heading: {
    title: "Start your free trial. Sign up with:",
    rank: 5,
    size: "default"
  },
  mobileHeading: {
    title: "Signup",
    rank: 5,
    size: "default"
  },
  buttons: {
    full: [{
      label: "Email",
      icon: "email",
      buttonType: "secondary",
      ariaLabel: "Email"
    }, {
      label: "Mobile",
      icon: "phone",
      buttonType: "primary",
      ariaLabel: "Mobile"
    }, {
      label: "Facebook",
      icon: "facebook",
      buttonType: "primary",
      ariaLabel: "Facebook",
      backgroundColor: "#4760a0"
    }],
    mini: [{
      label: "Email",
      icon: "email",
      buttonType: "secondary",
      ariaLabel: "Email"
    }, {
      label: "Mobile",
      icon: "phone",
      buttonType: "primary",
      ariaLabel: "Mobile"
    }]
  }
};

const getStickyBanner = () => {
  return stickyBanner;
};

export default getStickyBanner;
