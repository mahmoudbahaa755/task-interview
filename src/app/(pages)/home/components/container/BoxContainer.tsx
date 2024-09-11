export default function BoxContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-[340px] h-[123px] !pt-[44px] !pb-[65px] !px-[37px] md:!w-full text-start bg-white rounded-[15px] border-[3px] border-[#F0F0F0]">
      {children}
    </div>
  );
}
