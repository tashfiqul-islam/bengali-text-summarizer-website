import { NewspaperIcon, BookOpen, Library, Newspaper } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

/**
 * Represents an article with a title and content.
 */
export interface Article {
  title: string
  content: string
}

/**
 * Represents a category with a name, icon, and list of articles.
 */
export interface Category {
  name: string
  icon: LucideIcon
  articles: Article[]
}

/**
 * Array of categories with their respective articles.
 * Each category contains a name, an icon from Lucide, and an array of articles.
 */
export const categories: Category[] = [
  {
    name: 'Politics and Current Affairs',
    icon: NewspaperIcon,
    articles: [
      {
        title: 'Rohingya Repatriation',
        content:
          'সাহায্য নিতে জড়ো হয়েছে রোহিঙ্গা শিশুরা। এই পরিস্থিতিতে প্রশ্ন উঠেছে এতো সংখ্যক শরণার্থীর জন্য আন্তর্জাতিক যেসব সহায়তা পাওয়া যাচ্ছে সেটি আসলে কতদিন পাওয়া যাবে? তাদেরকে নিজ দেশ মিয়ানমারে ফেরত পাঠানোর কাজে দেরি হলে পরিস্থিতি কেমন হতে পারে? বাংলাদেশের অর্থনীতি কি পারবে সেই পরিস্থিতি সামাল দিতে? গত বছরের অগাস্ট মাস থেকে রোহিঙ্গা শরণার্থীদের ঢল নেমেছিল বাংলাদেশের দক্ষিণ সীমান্তে। জাতিসংঘ বলছে, গত এক দশকে এটিই শরণার্থীদের সবচেয়ে বড় স্রোত। মিয়ানমারের সেনাবাহিনীর নির্যাতনে প্রাণ বাঁচাতে এ দফায় বাংলাদেশে পালিয়ে এসেছে সাত লাখেরও বেশি শরণার্থী। আগে থেকেই ছিলো আরো চার লাখ। সবমিলিয়ে রোহিঙ্গাদের সংখ্যা এখন প্রায় এগারো লাখ। বাংলাদেশের শরণার্থী প্রত্যাবাসন বিষয়ক কমিশনার আবুল কালাম বিবিসি বাংলাকে বলেছেন, এসব শরণার্থীকে আশ্রয় দেওয়ার জন্য আন্তর্জাতিক সহায়তা মিললেও বাংলাদেশকেও ব্যয় করতে হচ্ছে প্রচুর অর্থ। তিনি বলেন, "প্রায় ৫০০ মিলিয়ন ডলারের মতো সহায়তা এসেছে বিভিন্ন সংস্থার মাধ্যমে। তা দিয়েই আসলে প্রথম ছয় মাস পার করা গেছে। এর বাইরে জিআরপি বা জয়েন্ট রেসপন্স প্ল্যানে বাংলাদেশকে ৯৫১ মিলিয়ন ডলার দেওয়ার অঙ্গীকার করা হয়েছে। সেখান থেকে ২০ভাগ সহায়তা পাওয়া গেছে। আরও কিছু অর্থ পাইপলাইনে আছে।" বর্তমানে ১১ রাখের মতো রোহিঙ্গা আছে বাংলাদেশে। আরো পড়তে পারেন: সেনেগালের যে গোলটি নিয়ে বিতর্ক বিশ্বকাপ ২০১৮: রাশিয়ার জন্মহার বাড়াবে ফুটবল? রাশিয়ায় এখন পর্যন্ত নজর কেড়েছেন কারা খেলা শেষে জাপান সমর্থকরাই পরিষ্কার করলো স্টেডিয়াম সৌদিতে যেভাবে গাড়ি চালানোর প্রস্তুতি নিচ্ছে মেয়েরা বাংলাদেশের কর্মকর্তারা বলছেন, এই হিসেবের বাইরেও রোহিঙ্গাদের পেছনে প্রচুর অর্থ ব্যয় করেছে সরকার। কক্সবাজার ও টেকনাফের শরণার্থী শিবির থেকে তাদেরকে যে ধীরে ধীরে ভাসানচরে নিয়ে যাওয়ার পরিকল্পনা করা হয়েছে, তার জন্যে বরাদ্দ করা হয়েছে দু\'হাজার কোটি টাকা। মি. কালাম অবশ্য বলছেন, শরণার্থীদের ফেরত পাঠানোই মূল উদ্দেশ্য বাংলাদেশের এবং সেজন্য জোর তৎপরতাও চালানো হচ্ছে। তবে আন্তর্জাতিক সম্প্রদায় থেকে এখন সহায়তা মিললেও প্রত্যাবাসন বিলম্বিত হলে কী হবে তা নিয়ে সংশয় প্রকাশ করলেন গবেষক ও অর্থনীতিবিদ নাজনীন আহমেদ। তিনি বলেন, "সাহায্য সহযোগিতার কিছুটা হয়তো অব্যাহত থাকবে আগামী কয়েক বছর। বিশেষ করে উন্নয়ন ��হযোগীদের মাধ্যমে যেসব সাহায্য আসে সেগুলো আসবে। কিন্তু বেশি আসে সাময়িক সহায়তা। এটা কিন্তু অব্যাহত থাকে না।" "বিশ্বের অন্যান্য যেসব শরণার্থীরা অবস্থান করছে সেসব দেশেও এ ধরনের পরিস্থিতি দেখা গেছে। রোহিঙ্গাদের মিয়ানমারে ফেরত যাওয়ার সম্ভাবনা খুবই কম। তাদের জন্য খাদ্য থেকে শুরু করে সবই লাগবে," বলেন তিনি। নাজনীন আহমেদ বলছেন খাদ্য, বাসস্থান, স্বাস্থ্যসেবা, অবকাঠামো উন্নয়নে বাংলাদেশকেও বড় ধরনর বিনিয়োগ করতে হচ্ছে যার প্রভাব পড়ছে দেশের অর্থনীতিতে। ত্রাণ বিতরণ করছেন তুর্কী প্রধানমন্ত্রী বিনালি ইলদিরিম। তবে চট্টগ্রাম বিশ্ববিদ্যালয়ের ফরেস্ট্রি ও এনভায়রনমেন্টাল সায়েন্সেস ইন্সটিটিউটের পরিচালক ড: মুহাম্মদ দানেশ মিয়া বলছেন, রোহিঙ্গা সংকট আরও বড় ধরনের বিপর্যয় নিয়ে এসেছে কক্সবাজার অঞ্চলের কৃষি, পরিবেশ ও জীব-বৈচিত্রের ক্ষেত্রে। তিনি বলেন, "বাংলাদেশের এই মানবিক ভূমিকার মূল্য দিতে হচ্ছে বন ও পরিবেশ ধ্বংস করে। কৃষি ধ্বংস হচ্ছে। স্থানীয়দের আয় রোজগারে বড় সমস্যা তৈরি করছে। পরিবেশ ও অর্থনীতি নিয়ে তৈরি হয়েছে ভয়ানক পরিস্থিতি।" এরকম পরিস্থিতিতে প্রায়শই আন্তর্জাতিক সম্প্রদায়ের নানা প্রতিনিধি বাংলাদেশে আসছেন। চলতি মাসের শেষে ঢাকায় আসার কথা রয়েছে জাতিসংঘ মহাসচিব ও বিশ্বব্যাংকের প্রেসিডেন্টের। অর্থনৈতিক সম্পর্ক বিভাগের সচিব শফিকুল আজম বলেছেন, তাদের কাছে নতুন করে সহযোগিতা চাওয়ার কিছু নেই। "বিশ্বব্যাংক সাহায্য দিতে চেয়েছে। তারা অনুদান দিতে রাজী হয়েছে ৪০০ মিলিয়ন ডলারের মতো। প্রাথমিকভাবে স্বাস্থ্য খাতে ৫০ মিলিয়ন ডলারের একটি প্রকল্প নিয়ে আলোচনা শেষ হয়েছে। রাস্তাঘাট, বিদ্যুৎ ও আশ্রয় কেন্দ্র নির্মাণসহ অন্য ক্ষেত্রে আরও প্রায় ১৫০ মিলিয়ন ডলার দেবে। এগিয়ে আসছে এডিবিও। এবার বিশ্বব্যাংক প্রেসিডেন্ট আসবেন জাতিসংঘ মহাসচিবের সাথে। এখানে নতুন করে সহায়তা চাইবার কিছু নেই।" কিন্তু অর্থনীতিবিদ নাজনীন আহমেদ বলছেন, বিশ্বব্যাংকসহ দাতা সংস্থাগুলোর এ ধরনের কর্মসূচি নিয়ে আরও এগিয়ে আসা উচিত। তিনি মনে করেন, আন্তর্জাতিক সংস্থাগুলোর সাথে যে কোন বাণিজ্য চুক্তির সময় রোহিঙ্গা ইস্যুকে কাজে লাগালে ক্ষতি কিছুটা হলেও কাটিয়ে ওঠার সুযোগ তৈরি করতে পারে বাংলাদেশ।',
      },
      {
        title: "BNP's Alliance",
        content:
          'নির্বাচনের আগে প্রধানমন্ত্রী শেখ হাসিনার সাথে সংলাপে  ঐক্যফ্রন্টের নেতারা। ঐক্যফ্রন্টের নেতৃত্বের ব্যাপারে কিছু ক্ষেত্রে অবিশ্বাস, সন্দেহ এবং অনেক প্রশ্নও বিএনপিতে রয়েছে। গত নির্বাচনের আগে এই জোট গঠনের সাথে জড়িত কামাল হোসেনের গণফোরামসহ অন্যদলের নেতারা বলেছেন, ব্যর্থতার অভিযোগ থাকলেও তাদের জোট অপ্রাসঙ্গিক হয়ে যায়নি। বিএনপি নেতারা অবশ্য বলেছেন, অনেক প্রশ্ন থাকলেও তারা ঐক্যফ্রন্ট ভেঙে দেবেন না। তারা উল্লেখ করেছেন, সরকারবিরোধী শক্তিগুলোকে এক মঞ্চে নেয়ার জন্যে বিএনপি এখনও ঐক্যফ্রন্টকেই টিকিয়ে রাখতে আগ্রহী। কেন বিএনপিতে এত প্রশ্ন? এক বছর আগে জাতীয় ঐক্যফ্রন্ট নামের নির্বাচনী জোট গঠনের সময়ই বিএনপির তৃণমুলে এই জোট নিয়ে অবিশ্বাস, সন্দেহ ছিল। নির্বাচনে বিপর্যয়ের পর বিএনপিতে সেই অবিশ্বাস ও সন্দেহ বেড়ে যায় এবং দলটির নেতাকর্মিদের মাঝে তৈরি হয় হতাশা। এখনও বিএনপির নেতাকর্মীদের অনেক প্রশ্ন তাড়া করছে ঐক্যফ্রন্টকে। রাজশাহী এবং চট্টগ্রামসহ কয়েকটি জেলার বিএনপির বেশ কয়েকজন নেতা বলেছেন, ঐক্যফ্রন্ট গত নির্বাচনে চরমভাবে হেরে গিয়ে এই সংসদকে অবৈধ বলে উল্লেখ করেছিল। কিন্তু এরপরও ঐক্যফ্রন্টের মাত্র যে সাতজন বিজয়ী হয়েছিলেন, তাদেরও সংসদে যাওয়া ঠেকাতে পারেনি। বিএনপির তৃণমুলের নেতাকর্মীরা মনে করেন যে, এক্যফ্রন্ট গত এক বছরে রাজনীতিতে কোন অবস্থান নিয়ে দাঁড়াতেও ব্যর্থ হয়েছে। তৃণমুলের পাশাপাশি দলটির মধ্যম সারির নেতারাও এখনও ঐক্যফ্রন্ট নিয়ে একই ধারণা পোষণ করেন। বিএনপির একজন কেন্দ্রীয় নেত্রী এবং সাবেক এমপি নিলুফার চৌধুরী বলছিলেন, এখনও ঐক্যফ্রন্ট নিয়ে এগুনোর বিষয়ে তাদের প্রশ্ন রয়েছে। "প্রত্যেকটা সচেতন মানুষ দেখেছে যে, এই ঐক্যফ্রন্ট দিয়ে আমাদের কতটা লাভ হয়েছে বা হয় নাই। এখন তারপরও তারা কারও সাথে কথা না বলে কাউকে জিজ্ঞেস না করে এই জোট নিয়ে কাজ করছে।" "একটা মানুষ যখন ভুল করে তখন তার সংসার এবং সে সাফার করে। একজন রাজনীতিবিদ ভুল করলে তার দল এবং দেশ সাফার করে। এই ভুল করার কথা বলার স্পর্ধা যেমন আমার নাই, তেমনি আমি এটাও বলতে চাই যে আমরা ধাক্কা খাচ্ছি। কিন্তু কোনো সমাধানে আসতে পারছি না।" বিএনপি চেয়ারপারসন খালেদা জিয়া বিকল্প নেতা কামাল হোসেন বিএনপির একাধিক সিনিয়র নেতা বলেছেন,তাদের নেত্রী খালেদা জিয়া জেলে থাকায় তার বিকল্প হিসেবে কামাল হোসেনের নেতৃত্ব মেনে নিয়ে বিএনপি এই জোট করেছিল। কিন্তু মি. হোসেন নির্বাচন না করায় সেটি বিএনপির জন্য ছিল প্রথম হোঁচট বা ধাক্কা। এছাড়া নির্বাচনী প্রচারণাতেও বিএনপি তাদের নেত্রীর বিকল্প হিসেবে প্রত্যাশা অনুযায়ী কামাল হোসেনকে মাঠে পায়নি। সেজন্য এই জোট তাদের নেতৃত্ব সম্পর্কে মানুষকে আশ্বস্ত করতে পারেনি বা একটা বিশ্বাস তৈরি করতে পারেনি বলে বিএনপি নেতাদের অনেকে মনে করেন। এসব বিষয়ে বিএনপি নেতৃত্বকে তাদের দলে বার বার প্রশ্নের মুখোমুখি হতে হয়েছে। এই জোট গঠনের সাথে জড়িত বিএনপির দু\'জন সিনিয়র নেতা ড: খন্দকার মোশাররফ হোসেন এবং ব্যারিষ্টার মওদুদ আহমেদ ভোটে পরাজয়ের পর ঐক্যফ্রন্টের বৈঠকগুলোতে অংশ নেয়া বন্ধ করে দেন। ঐক্যফ্রন্টের কারণে জামায়াতে ইসলামী সহ বিএনপির পুরোনো ২০ দলীয় জোট নিস্ক্রিয় হয়ে গেছে। বিএনপি কেন ঐক্যফ্রন্ট টিকিয়ে রাখতে চাইছে বিএনপি এখনও সরকারকে একঘরে করার চেষ্টা নিয়ে এগুতে চাইছে। সেজন্য তারা ঐক্যফ্রন্ট টিকিয়ে রাখছে। বিএনপির জাতীয় স্থায়ী কমিটির সদস্য গয়েশ্বর চন্দ্র রায় বলেন, "নির্বাচনের সময় যে প্রত্যাশা নিয়ে জোট করা হয়েছে, জনগণের সেই প্রত্যাশা পূরণ হয়নি। কিন্তু এখনও ঐক্যফ্রন্টের প্রয়োজন ফুরিয়ে যায়নি। কারণ ভোটের অধিকার প্রতিষ্ঠার জন্য নির্দলীয় সরকারের অধীনে নির্বাচনের দাবি এখনও পূর্ণতা পায়নি।" ঢাকার গুলশানে বিএনপি চেয়ারপারসনের কার্যালয় খালেদা জিয়ার মুক্তির দাবি নিয়ে ঐক্যফ্রন্ট সোচ্চার হয়নি বলে বিএনপির অভিযোগ নির্বাচনে পর গত এক বছরে বিএনপি তাদের নেত্রী খালেদা জিয়ার মুক্তির দাবি নিয়ে বড় ধরনের আন্দোলন চেয়েছিল ঐক্যফ্রন্টের নেতৃত্বে। কিন্তু গণফোরামসহ অন্যদলগুলো এই ইস্যুতে সেভাবে আগ্রহ দেখায়নি বলে বিএনপি নেতাদের অভিযোগ। এনিয়ে দলটির সব পর্যায়ের নেতাদের মধ্যেই ক্ষোভ রয়েছে । তবে শেষপর্যন্ত বিএনপির নেতৃত্ব রাজনৈতিক বিবেচনা থেকেই ঐক্যফ্রন্ট টিকিয়ে রাখার কথা বলছে। এই জোট গঠনের অন্যতম একজন নেতা এবং নাগরিক ঐক্যের প্রধান মাহমুদুর রহমান মান্না বলছিলেন, তাদের জোট অপ্রাসঙ্গিক হয়েছে এমন সংকট এখনো হয়নি। "এমন সংকটে আমরা পড়িনি যে, এটা অপ্রাসঙ্গিক হয়ে গেছে। তবে এটা হতেই পারে যে, মানুষের মধ্যে যে উচ্চাশা বা প্রত্যাশা ছিল বা সমর্থন ছিল, সেই তুলনায় আমরা কিছুই করতে পারিনি। সেজন্য একটা হতাশা আছে এবং অনেকে সমালোচনাও করেন। কিন্তু ঐক্যের বিরোধীতা করে তারা সেটা করছেন না।" ঐক্যফ্রন্টে অন্য শরিক দলগুলোর নেতারা মনে করেন, আওয়ামী লীগ সরকারের "কঠোর শাসনের" মুখে ঐকফ্রন্ট টিকিয়ে রাখা ছাড়া বিএনপির কাছে বিকল্প কিছু নেই।',
      },
      {
        title: "Kashoggi's Fallout",
        content:
          "যুবরাজ মোহাম্মদ বিন সালমান মার্কিন দৈনিক ওয়াশিংটন পোস্ট বলছে, সিআইএ তাদের হাতে থাকা তথ্য-উপাত্তগুলো বিচার-বিশ্লেষণ করেই এ ধারণায় উপনীত হয়েছে বলে একটি সূত্র তাদের জানিয়েছেন। অবশ্য এসব প্রমাণ যে শতভাগ নিশ্চিত তা কেউ বলছেন না। ওয়াশিংটন পোস্টের রিপোর্টের পর মার্কিন কর্মকর্তারা এখন বলছেন এ ব্যাপারে বহু প্রশ্নেরই উত্তর এখনো অজানা। সৌদি আরব নিজেরাও এ ঘটনার একটি তদন্ত করছে। বিবিসির বিশ্লেষক ফ্রাংক গার্ডনার বলছেন, তদন্তের ফল যাই হোক - যুবরাজ মোহাম্মদ বিন সালমানের সুনামের ওপর ইতিমধ্যেই এর গুরুতর প্রতিক্রিয়া পড়েছে। এর ফলে যুবরাজ মোহাম্মদ বিন সালমান - যাকে অনেকে বর্ণনা করেন এমবিএস বলে - তার কি পরিণতি হতে পারে? তার আগে দেখা দরকার যে জামাল খাসোগজি খুনের ঘটনা কি ভাবে সৌদি আরবের ভেতরে যুবরাজের অবস্থানকে ক্ষতিগ্রস্ত করেছে। তরুণদের আশার প্রতীক? যুবরাজ মোহাম্মদ বিন সালমানের বয়স মাত্র ৩৩। তাকে দেখা হয় লক্ষ লক্ষ তরুণ সৌদির ভবিষ্যতের আশার প্রতীক হিসেবে। মনে করা হয় তিনি প্রযুক্তি, কর্মসংস্থান, এবং সার্বিক প্রগতির মাধ্যমে সৌদি আরবকে একবিংশ শতাব্দীতে পৌঁছে দেবেন। খাসোগজি খুনের ঘটনার পর যুবরাজ মোহাম্মদেন সেই অবস্থান কি আর থাকবে? বিবিসি বাংলায় আরো পড়ুন: 'সৌদি যুবরাজই খাসোগজিকে হত্যার নির্দেশ দেন ': সিআইএ সৌদি আরব: রাজপরিবারের ভেতর কী ঘটছে? জামাল খাসোগজি এই সেদিনও পশ্চিমা দেশগুলোর নেতা থেকে শুরু করে হলিউড পর্যন্ত বিভিন্ন স্থানে বন্দিত হচ্ছিলেন প্রিন্স মোহাম্মদ - কিন্তু এখন অনেকেই গভীরভাবে সন্দেহ করছেন যে এ হত্যাকান্ডের পেছনে হয়তো তার হাত ছিল। এর ফলে সৌদি আরবের নেতৃত্ব ২০০১ সালের ১১ই সেপ্টেম্বরের সন্ত্রাসী হামলার পর সবচাইতে গুরুতর রাজনৈতিক সংকটের মধ্যে পড়েছে। কূটনৈতিক সংকট: সৌদি আরবের সরকার এখন ইয়েমেনের যুদ্ধ বন্ধ করার জন্য পশ্চিমা দেশগুলোর প্রচন্ড চাপের মুখে পড়েছে। এতে দেশটিতে প্রাণহানি হয়েছে ব্যাপক, দেখা দিয়েছে গুরুতর মানবিক সংকট। ইয়েমেনে হুতি বিদ্রোহীদের পরাভূত করার জন্য সৌদি আরব যুক্তরাষ্ট্র এবং কিছুটা যুক্তরাজ্যের ওপর নির্ভরশীল। প্রতিবেশী কাতারের সাথে বৈরিতার অবসান ঘটানোর জন্যও সৌদি আরবের ওপর চাপ বাড়ছে। কাতারে রয়েছে মার্কিন-নেতৃত্বাধীন কোয়ালিশনের এক বিশাল ঘাঁটি - যা এ অঞ্চলে মার্কিন কৌশলগত স্বার্থের জন্য অত্যন্ত গুরুত্বপূর্ণ। এ ঘাঁটিতে ১৭টি দেশের লোক কাজ করে। তাই যুক্তরাষ্ট্র চায় কাতার-সৌদি বৈরিতার দ্রুত অবসান। কি হতে পারে এমবিএসের? বিবিসির বিশ্লেষক ফ্রাংক গার্ডনার বলছেন, সৌদি সরকার হয়তো এটা প্রকাশ্যে স্বীকার করবে না। কিন্তু এটা খুবই সম্ভব যে কোনোভাবে তার ডানা কেটে দেয়া হবে, অর্থৎ তার ক্ষমতা ও প্রভাব অন্তত কিছুটা খর্ব করা হবে। ইস্তাম্বুলের সৌদি কনস্যুলেটে ঢুকছেন জামাল খাসোগজি তিনি কি তার বর্তমান পদে থাকবেন? মোহাম্মদ বিন সালমান 'যুবরাজ' অর্থাৎ বর্তমান বাদশার উত্তরাধিকারী হয়েছিলেন ২০১৭ সালের জুন মাসে। বিবিসির ফ্রাংক গার্ডনার বলছেন, তাকে যদি তার পদ থেকে একেবারেই সরিয়ে দেয়া হয় - সেটা হবে খুবই নাটকীয় ও বিস্ময়কর। বরং মনে করা হচ্ছে, তার উপাধি ও মর্যাদা হয়তো অপরিবর্তিতই থাকবে। কারণ তিনি এখনো তার পিতা বাদশা সালমানের প্রিয় পুত্র। তবে তার হাতে থাকা কিছু ক্ষমতা হয়তো চুপিসারে অন্যদের হাতে তুলে দেয়া হবে। এর ফলে অনেকটা আগের মতোই ক্ষমতার ভাগাভাগির ঐতিহ্য ফিরিয়ে আনা হবে। এতে হয়তো দেশটিতে একটা স্থিতিশীলতা আসবে। হয়তো এর ফলে যুবরাজ সালমানের শত্রু-সমালোচকের সংখ্যাও কমে আসতে পারে। রাষ্ট্রের সিদ্ধান্ত গ্রহণের প্রক্রিয়ায় এমন আরো সৌদিদের নিয়ে আসা হবে। কারণ, গত বছর জুন মাস থেকে সৌদি আরবে কার্যত এক ব্যক্তির শাসন চলছে। ওয়াশিংটন পোস্টের রিপোর্ট কতটা নিশ্চিত? একদিন আগে মার্কিন দৈনিক ওয়াশিংটন পোস্টে রিপোর্ট বেরোয় যে সৌদি যুবরাজ মোহাম্মদ বিন সালমানই আসলে সাংবাদিক জামাল খাসোগজিকে হত্যার নির্দেশ দিয়েছিলেন বলে সিআইএ বিশ্বাস করে। ওয়াশিংটন পোস্ট বলছে, খাসোগজিকে হত্যার নির্দেশ যে সরাসরি সৌদি যুবরাজের কাছ থেকে এসেছে, সেটি সিআইএ ধারণা করছে অংশত একটি ফোন কলের ভিত্তিতে। এ ঘটনার পর যুবরাজ সালমানকে নিয়ে গভীর প্রশ্নের সৃষ্টি হয়েছে যুবরাজ মোহাম্মদ বিন সালমানের ভাই প্রিন্স খালেদ বিন সালমান, যিনি যুক্তরাষ্ট্রে সৌদি রাষ্ট্রদূত, তিনি নাকি জামাল খাসোগজিকে ফোন করেছিলেন। যুবরাজের নির্দেশেই নাকি তিনি খাসোগজিকে ফোন করে আশ্বাস দেন যে, ইস্তাম্বুলের সৌদি কনস্যুলেটে তিনি যেতে পারেন, তার কোন বিপদ হবে না। সিআইএ'র ঘনিষ্ঠ সূত্রগুলো বলছে, তারা এর প্রমাণগুলো পরীক্ষা করে দেখেছে। মার্কিন কর্মকর্তাদের ধারণা, এমন একটি হত্যাকান্ড কেবলমাত্র যুবরাজ মোহাম্মদের অনুমতি নিয়েই হতে পারে। বিবিসির ফ্রাংক গার্ডনার বলছেন, হত্যাকান্ডের দিনে ঘাতক দলটি যুবরাজ মোহাম্মদ বিন সালমানের অত্যন্ত ঘনিষ্ঠ এক ব্যক্তিকে ফোন করেছিল বলে গোয়েন্দারা তথ্য পেয়েছেন। তিনি বলছেন, এসব তথ্য অত্যন্ত গুরুতর কিন্তু এতেও একেবারে নির্ভুলভাবে কিছু প্রমাণ হয় না। তবে রাষ্ট্রদূত প্রিন্স খালেদ বিন সালমান দাবি করছেন, জামাল খাসোগজির সঙ্গে এক বছর ধরে তার কোন যোগাযোগ হয়নি তবে সৌদি আরব এরকম দাবিকে মিথ্যা বলে বর্ণনা করেছে। তারা বলছে, যুবরাজ এই হত্যা পরিকল্পনা সম্পর্কে কিছুই জানতেন না। পররাষ্ট্র দফতরের মুখপাত্র হিদার নোয়ার্ট বলছেন, মার্কিন সরকার এ ব্যাপারে চূড়ান্ত সিদ্ধান্তে পৌছেছে এমন ইঙ্গিত দিয়ে যেসব খবর বেরুচ্ছে -সেগুলো নির্ভুল নয়। তিনি বলেন হোয়াইট হাউস এ ঘটনার ব্যাপারে দোষী ব্যক্তিদের বিচারের আওতায় আনা এবং 'প্রাসঙ্গিক তথ্য' বের করার জন্য কাজ করে যাবে। মার্কিন প্রেসিডেন্ট ট্রাম্প এ ব্যাপারে সিআইএ'র শীর্ষস্থানীয় কর্মকর্তাদের সাথে কথা বলেছেন বলে জানিয়েছে হোয়াইট হাউস।",
      },
    ],
  },
  {
    name: 'Economy and Business',
    icon: Library,
    articles: [
      {
        title: 'Fish Farming Concerns',
        content:
          'বাংলাদেশে যারা মাছ চাষ করেন, তাদের কেউ কেউ অভিযোগ করছেন মাছ চাষ ও ওষুধ ব্যবহারের ক্ষেত্রে সরকারের কাছ থেকে সুনির্দিষ্ট কোন পরামর্শ তারা পান না। সব বাজারেই চাষের মাছের আধিক্য দেখা যায় খাদ্য প্রস্তুতকারী বিভিন্ন কোম্পানির পরামর্শেই বিভিন্ন রাসায়নিক এমনকি এন্টিবায়োটিকের ব্যবহার ও মাত্রা নির্ধারণ করেন তারা। এছাড়া অনেক খামারেই এখনো মাছের খাদ্য হিসেবে ব্যবহার করা হয় মুরগির বিষ্ঠা ও আবর্জনা। কিন্তু এ ধরণের প্রক্রিয়ায় উৎপাদিত মাছ মানব স্বাস্থ্যের জন্য ক্ষতির কারণ হতে পারে বলে সতর্ক করছেন গবেষকরা। কিন্তু চাষের মাছ নিয়ে উদ্বেগ কতটা ব্যাপক? আর এক্ষেত্রে সরকারি নজরদারিই বা কতটা?',
      },
      {
        title: 'Hajj Visa Issues',
        content:
          'বাংলাদেশে হজ যাত্রীদের ভিসা জটিলতার পাশাপাশি এখন ফ্লাইট নিয়ে উদ্বেগ দেখা দিয়েছে। জেদ্দার বিমান বন্দরে হজযাত্রীদের লাইন ভিসা জটিলতার কারণে যাত্রী কম থাকায় রোববারও একটি ফ্লাইট বাতিল হয়েছে। সবমিলিয়ে এখনো পর্যন্ত ১৯টি ফ্লাইট বাতিল হলো। হজের শেষ ফ্লাইট ২৬শে আগস্ট। কিন্তু মোট হজ যাত্রীর তিন ভাগের দুভাগই এখনো বাকি রয়ে গেছে।',
      },
      {
        title: 'Covid Travel Policies',
        content:
          'সৌদি আরব তাদের দেশে প্রবেশের ওপর নিষেধাজ্ঞা প্রত্যাহার করার পর নির্দিষ্ট শর্ত সাপেক্ষে বাংলাদেশ সহ ২৫টি দেশের নাগরিকদের দেশটিতে প্রবেশ করার অনুমতি দেয়ার কথা জানিয়েছে। বাংলাদেশ সহ ২৫টি দেশের নাগরিকদের নির্দিষ্ট শর্ত সাপেক্ষে দেশে প্রবেশ করার অনুমতি দেয়ার কথা জানিয়েছে সৌদি আরব ভিত্তিক সংবাদ মাধ্যম সৌদি গেজেট, এক্সপ্রেস রিয়াদ, ও আরব নিউজ সহ বেশ কয়েকটি সংবাদ মাধ্যম খবর প্রকাশ করেছে যে সাতটি শর্তে সৌদি এয়ারলাইন্স বিদেশ থেকে সৌদি আরবে কয়েকটি দেশের যাত্রীদের ভ্রমণ করার অনুমতি দেবে।',
      },
    ],
  },
  {
    name: 'Society and Culture',
    icon: BookOpen,
    articles: [
      {
        title: 'George Floyd Protests',
        content:
          "বিক্ষোভের দৃশ্য মিনিয়াপোলিস সিটি কাউন্সিলের সংখ্যাগরিষ্ঠ সদস্যরা এই অঙ্গীকার করেছেন, যাকে যুক্তরাষ্ট্রে চলমান আন্দোলনের বড় অর্জন হিসেবে দেখা হচ্ছে। স্থানীয় কাউন্সিলের তেরজন সদস্যের মধ্যে নয়জনই শহরে 'জননিরাপত্তার একটি নতুন মডেলে'র কথা বলছেন। মেয়র জ্যাকব ফ্রে আগে এ উদ্যোগের বিরোধিতা করে বিক্ষোভকারীদের দুয়ো শুনেছেন। বিবিসি বাংলায় আরও পড়ুন: আমেরিকায় পুলিশ মানুষ হত্যা করলেও দোষী সাব্যস্ত হয় না কেন? আমেরিকায় পুলিশের হাতে কৃষ্ণাঙ্গ হত্যার খতিয়ান যুক্তরাষ্ট্রে কেন কিছু প্রতিবাদ সহিংসতায় রূপ নেয় লন্ডনে প্রথম কৃষ্ণাঙ্গ পুলিশ: বর্ণবাদের যাতাকলে ৩০ বছর কলিন পাওয়েল ওদিকে কলিন পাওয়েল একজন রিপাবলিকান, সাবেক পররাষ্ট্রমন্ত্রী ও সাবেক শীর্ষ সেনা কর্মকর্তাদের একজন। তিনি বলছেন সামনের নির্বাচনে তিনি ট্রাম্পকে ভোটই দেবেননা। জর্জ ফ্লয়েড হত্যাকাণ্ডকে ঘিরে গড়ে ওঠা বর্ণবাদ বিরোধী আন্দোলনকে যেভাবে মোকাবেলা করছেন ডোনাল্ড ট্রাম্পকে তার কঠোর সমালোচনা করে মিস্টার পাওয়েল বলেছেন প্রেসিডেন্ট 'সংবিধান থেকে সরে যাচ্ছেন'।",
      },
      {
        title: 'Meghalaya Miners',
        content:
          "উদ্ধারে চেষ্টা চালাচ্ছেন একশোরও বেশী উদ্ধারকারী। কিন্তু পুলিশ বলছে, গত ৫ দিন ধরে এখনও ওই শ্রমিকদের কোনও খোঁজ পাওয়া যায় নি। তারা বেঁচে আছেন কি-না, তাও বলা সম্ভব হচ্ছে না বলে জানাচ্ছেন উদ্ধারকারীরা। গত বৃহস্পতিবার রাতে পূর্ব জয়ন্তিয়া জেলার কসন গ্রামে জঙ্গলের ভেতরে অবস্থিত একটি বেআইনি কয়লা খাদানে (এই খাদানগুলোকে 'র‍্যাট হোল মাইনিং' বলা হয়) নেমেছিলেন ওই শ্রমিকরা। পাশ দিয়েই বইছে লিটিয়েন নদী। পুলিশ জানতে পেরেছে, প্রথম দিন নেমেই ওই শ্রমিকরা সেখানে আটকে পড়ে। তার কয়েকদিন আগে কৃপ চুলেট নামে এক স্থানীয় ব্যক্তি খাদানটি ভাড়া নিয়েছিলেন। দুর্ঘটনার পরেই ওই ব্যক্তিকে গ্রেপ্তার করেছে পুলিশ।",
      },
      {
        title: 'Courtroom Suicide',
        content:
          'আদালত প্রাঙ্গণেই ছুরি দিয়ে আত্মহত্যা করেছে এক যুবক। সোমবার জেলার নির্বাহী ম্যাজিস্ট্রেটের আদালত প্রাঙ্গণে এই ঘটনা ঘটে। হবিগঞ্জ সদর মডেল থানার ভারপ্রাপ্ত কর্মকর্তা বিবিসি বাংলাকে জানান, বেলা আনুমানিক একটার দিকে নিজের শরীরে ছুরি দিয়ে আঘাত করে আত্মহত্যা করেন ওই যুবক। মারা যাওয়ার পর তার দেহ স্থানীয় হাসপাতালের মর্গে রাখা হয়েছে। ময়না তদন্তের পর তার দাফনের ব্যবস্থা করা হবে। তিনি বলেন, ধারণা করা হচ্ছে স্ত্রী-সন্তান তার সাথে যেতে রাজি হয়নি বলে মানসিকভাবে বিপর্যস্ত হয়ে এ ধরণের পদক্ষেপ নিয়ে থাকতে পারেন।',
      },
    ],
  },
  {
    name: 'Entertainment and Lifestyle',
    icon: Newspaper,
    articles: [
      {
        title: 'Weinstein Allegations',
        content:
          'মার্কিন তারকা রোস ম্যাকগাওয়ানের (ডানে) সাথে হার্ভে উইনেস্টেন ইতোমধ্যেই মিরাম্যাক্স এবং উইনস্টেইন কোম্পানী ৮১টি অস্কার পুরষ্কার পেয়েছে। কিন্তু যৌন নিপীড়নের অভিযোগের প্রেক্ষাপটে এ নিয়ে নতুন করে সিদ্ধান্ত নেয়া হতে পারে বলে বুধবার জানায় সংস্থাটি। ২০১৫ সালে এক নারী হার্ভে উইনস্টেনের বিরুদ্ধে যৌন অভিযোগ করলেও তখন কোনো ব্যবস্থা নেয়া হয়নি এবং এ নিয়ে নিজেদের পক্ষে যুক্তি তুলে ধরেছেন আইনজীবীরা। তাঁরা বলছেন মি: উইনস্টেনের বিরুদ্ধে অভিযোগের যথেষ্ট প্রমাণাদি তাঁরা পাননি, ফলে তাঁকে অপরাধীও বলা সম্ভব হয়নি। তবে তারা এটাও বলছেন যে অস্কারজয়ী এই প্রযোজকের "নারীদের সঙ্গে অশালীন ব্যবহারের উদাহরণ রয়েছে"।',
      },
      {
        title: 'Grave Ritual',
        content:
          "ঢাকার পোস্তগোলা শ্মশান। তখন আশেপাশের লোকজন দেখতে পেয়ে তাদের আটক করে পুলিশে খবর দেয়। সোমবার দিবাগত রাতে এই ঘটনা ঘটে ঢাকার পোস্তগোলায় জাতীয় শ্মশানে। শ্যামপুর থানার ওসি মোঃ: মিজানুর রহমান বলছেন, সোমবার ঢাকার একটি হাসপাতালে ঠাঁটারিবাজার এলাকার একজন ব্যবসায়ীর সন্তান জন্মের কয়েক ঘণ্টার মধ্যেই মারা যায়। রাতে সেই শিশুটিকে পোস্তগোলার শ্মশানে সমাধি করা হয়। ''রাত ২টার দিকে ১০ থেকে ১৫ বছর বয়সের পাঁচ কিশোর সেই সমাধি খুড়ে শিশুটির মৃতদেহ বের করে আনে। এক পর্যায়ে তারা ধারালো ছুরি দিয়ে শিশুটির গলা কেটে লাল রঙ মেখে তান্ত্রিক সাধনা করতে শুরু করে।''",
      },
      {
        title: 'Chakbazaar Fire',
        content:
          'চকবাজারের আগুন নিয়ন্ত্রণের চেষ্টায় দমকল বাহিনী মন্ত্রণালয়ের অতিরিক্ত সচিব মোহাম্মদ মফিজুল হককে প্রধান করে গঠিত একটি তদন্ত কমিটির ওই প্রাথমিক প্রতিবেদনে বলা হয়েছে যে রাসায়নিক নয়, বরং গ্যাস সিলিন্ডার বিস্ফোরণ থেকে অগ্নিকাণ্ডের সূত্রপাত ঘটে বলে প্রতীয়মান হয়েছে। প্রতিবেদনে বলা হয়, বুধবার রাত ১০.৩০ মিনিট নাগাদ চকবাজারের চুরিহাট্টা জামে মসজিদ সংলগ্ন আসগর লেন, নবকুমার দত্ত রোড ও হায়দার বক্সলেন-এর মিলনস্থলে অগ্নিকাণ্ড সংঘটিত হয়। এতে বলা হয়, এই গলিপথের একপাশে ওয়াহিদ ম্যানশন, অন্যপাশে বাচ্চু মিয়ার বাড়ি। উক্ত ওয়াহিদ ম্যানশনের নিচতলায় হোটেল এবং উপরের তলায় একটি কসমেটিকসের গোডাউন ছিল।',
      },
    ],
  },
]
