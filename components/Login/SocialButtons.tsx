export default function SocialButtons() {
  const providers = [
    { name: "Google", icon: "fab fa-google", color: "text-red-600" },
    { name: "Facebook", icon: "fab fa-facebook-f", color: "text-blue-600" },
    { name: "GitHub", icon: "fab fa-github", color: "text-gray-800" },
  ];

  return (
    <div className="flex justify-center gap-4">
      {providers.map((p) => (
        <button
          key={p.name}
          onClick={() => alert(`Login with ${p.name}`)}
          className="w-10 h-10 flex items-center justify-center border rounded-full hover:shadow-md transition"
        >
          <i className={`${p.icon} ${p.color}`} />
        </button>
      ))}
    </div>
  );
}
