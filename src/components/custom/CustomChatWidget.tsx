export const CustomChatWidget = () => {
    return (
        <div className="fixed bottom-6 right-6 z-40">
            <button className="w-16 h-16 bg-orange-500 hover:bg-[#E63A48] rounded-full flex items-center justify-center text-white shadow-lg transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                </svg>
            </button>
        </div>
    )
}
