export function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-16 mb-16">
          <div className="md:w-1/3">
            <div className="text-3xl font-light mb-6">ElonMuskMom Coin</div>
            <p className="text-gray-600 font-light leading-relaxed">
              Thank you, May Musk, for giving the world Elon.
            </p>
          </div>
          
          <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-sm uppercase tracking-wider mb-6 text-gray-400">About</h4>
              <ul className="space-y-4 text-gray-600 font-light">
                <li><a href="#" className="hover:text-black transition-colors">About May Musk</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Tokenomics</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Roadmap</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm uppercase tracking-wider mb-6 text-gray-400">Community</h4>
              <ul className="space-y-4 text-gray-600 font-light">
                <li><a href="#" className="hover:text-black transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Telegram</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Discord</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm uppercase tracking-wider mb-6 text-gray-400">Resources</h4>
              <ul className="space-y-4 text-gray-600 font-light">
                <li><a href="#" className="hover:text-black transition-colors">How to Buy</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Contract</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Audit</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-200 text-gray-500 text-sm font-light space-y-2">
          <p>© 2026 ElonMuskMom Coin. Made by the community with love.</p>
          <p>Not affiliated with May Musk, Elon Musk or their companies.</p>
        </div>
      </div>
    </footer>
  );
}