export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Ghani",
    img: "https://scontent.fcfk1-1.fna.fbcdn.net/v/t1.6435-9/202940318_3007502806241516_7816626824548318541_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=k_GdcNaFzPAAX_t3Vga&_nc_ht=scontent.fcfk1-1.fna&oh=00_AT-JQV4U5XNmFOn6LjqYKtpDkbd8kAPCViESsoCL3SLqgA&oe=62696C1A",
    status: "active",
    email: "ghani@gmail.com",
    age: 23,
  },
  {
    id: 2,
    username: "Habib",
    img: "https://scontent.fcfk1-1.fna.fbcdn.net/v/t1.6435-9/202940318_3007502806241516_7816626824548318541_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=k_GdcNaFzPAAX_t3Vga&_nc_ht=scontent.fcfk1-1.fna&oh=00_AT-JQV4U5XNmFOn6LjqYKtpDkbd8kAPCViESsoCL3SLqgA&oe=62696C1A",
    status: "passive",
    email: "habib@gmail.com",
    age: 33,
  },
  
  
  
];
