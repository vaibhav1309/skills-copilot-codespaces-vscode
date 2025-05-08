function skillsMember() {
  return {
    name: "skills",
    description: "Get a list of skills for a member",
    options: [
      {
        name: "member",
        description: "The member to get the skills for",
        type: 6,
        required: true,
      },
    ],
    type: 1,
  };
}