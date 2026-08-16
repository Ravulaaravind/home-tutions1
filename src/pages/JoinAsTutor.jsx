import React, { useState } from 'react';
import { 
  UserCheck, GraduationCap, Phone, Mail, MapPin, Briefcase, 
  Upload, FileText, CheckCircle2, ShieldCheck, Sparkles, BookOpen, AlertCircle,
  MessageSquare, ExternalLink
} from 'lucide-react';
import { HYDERABAD_LOCATIONS, CLASSES_LIST, SUBJECTS_LIST, BOARDS_LIST } from '../data/tutorsData';

export default function JoinAsTutor({ onSuccess }) {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    whatsappNumber: '',
    email: '',
    qualification: 'B.Tech / M.Tech',
    experienceYears: '3',
    tuitionMode: 'Online Tuition',
    docType: 'Aadhaar Card',
    gender: 'Male',
    bio: ''
  });

  const [selectedSubjects, setSelectedSubjects] = useState(['Mathematics', 'Physics']);
  const [selectedClasses, setSelectedClasses] = useState(['Class 9', 'Class 10']);
  const [selectedBoards, setSelectedBoards] = useState(['CBSE']);
  const [customAreas, setCustomAreas] = useState('');
  const [uploadedFile, setUploadedFile] = useState(null);
  const [filePreviewName, setFilePreviewName] = useState('');
  const [fileSizeText, setFileSizeText] = useState('');
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  const [generatedCloudUrl, setGeneratedCloudUrl] = useState('');
  const [isUploadingCloud, setIsUploadingCloud] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleItem = (list, setList, item) => {
    if (list.includes(item)) {
      setList(list.filter(i => i !== item));
    } else {
      setList([...list, item]);
    }
  };

  const uploadFileToCloud = async (file) => {
    if (!file) return null;
    setIsUploadingCloud(true);

    // Method 1: ImgBB API for Images via FormData
    if (file.type.startsWith('image/')) {
      try {
        const body = new FormData();
        body.append('key', '6d257051364378b61407e11d2e9b9f97');
        body.append('image', file);
        const res = await fetch('https://api.imgbb.com/1/upload', {
          method: 'POST',
          body: body
        });
        const data = await res.json();
        if (data && data.data && (data.data.display_url || data.data.url)) {
          setIsUploadingCloud(false);
          const directImgUrl = data.data.display_url || data.data.url;
          return { url: directImgUrl, isImage: true };
        }
      } catch (err) {
        console.log('ImgBB upload error:', err);
      }
    }

    // Method 2: FreeImage.host API for Images
    if (file.type.startsWith('image/')) {
      try {
        const body = new FormData();
        body.append('key', '6d257051364378b61407e11d2e9b9f97');
        body.append('action', 'upload');
        body.append('source', file);
        body.append('format', 'json');
        const res = await fetch('https://freeimage.host/api/1/upload', {
          method: 'POST',
          body: body
        });
        const data = await res.json();
        if (data && data.image && data.image.url) {
          setIsUploadingCloud(false);
          return { url: data.image.url, isImage: true };
        }
      } catch (err) {
        console.log('FreeImage upload error:', err);
      }
    }

    // Method 3: File.io API for PDFs & Documents
    try {
      const body = new FormData();
      body.append('file', file);
      const res = await fetch('https://file.io', {
        method: 'POST',
        body: body
      });
      const data = await res.json();
      if (data && data.success && data.link) {
        setIsUploadingCloud(false);
        return { url: data.link, isImage: file.type.startsWith('image/') };
      }
    } catch (err) {
      console.log('File.io upload error:', err);
    }

    // Method 4: Tmpfiles API fallback for PDFs
    try {
      const body = new FormData();
      body.append('file', file);
      const res = await fetch('https://tmpfiles.org/api/v1/upload', {
        method: 'POST',
        body: body
      });
      const data = await res.json();
      if (data && data.status === 'success' && data.data && data.data.url) {
        const directUrl = data.data.url.replace('tmpfiles.org/', 'tmpfiles.org/dl/');
        setIsUploadingCloud(false);
        return { url: directUrl, isImage: file.type.startsWith('image/') };
      }
    } catch (err) {
      console.log('Tmpfiles upload error:', err);
    }

    setIsUploadingCloud(false);
    return null;
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFile(file);
      setFilePreviewName(file.name);
      setGeneratedCloudUrl('');
      window._latestCloudUrl = '';
      const sizeKB = Math.round(file.size / 1024);
      const sizeMB = (file.size / (1024 * 1024)).toFixed(2);
      const sizeStr = sizeKB > 1024 ? `${sizeMB} MB` : `${sizeKB} KB`;
      setFileSizeText(sizeStr);

      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreviewUrl(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        setImagePreviewUrl(null);
      }

      // Pre-upload file to cloud immediately upon selection
      const cloudRes = await uploadFileToCloud(file);
      if (cloudRes && cloudRes.url) {
        setGeneratedCloudUrl(cloudRes.url);
        window._latestCloudUrl = cloudRes.url;
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    let cloudUrl = generatedCloudUrl || window._latestCloudUrl || '';

    // If file is selected but cloudUrl isn't ready yet, upload now
    if (!cloudUrl && uploadedFile) {
      setIsSubmitting(true);
      const cloudRes = await uploadFileToCloud(uploadedFile);
      if (cloudRes && cloudRes.url) {
        cloudUrl = cloudRes.url;
        setGeneratedCloudUrl(cloudUrl);
        window._latestCloudUrl = cloudUrl;
      }
      setIsSubmitting(false);
    }

    // Construct document details
    const docInfo = filePreviewName 
      ? `• Type: ${formData.docType}\n• File Name: ${filePreviewName}\n• File Size: ${fileSizeText || 'Attached'}`
      : `• Type: ${formData.docType} (Not attached in form)`;

    const isImg = uploadedFile ? uploadedFile.type.startsWith('image/') : false;
    const fileLinkSection = cloudUrl 
      ? `\n\n${isImg ? '🖼️ *VIEW DOCUMENT IMAGE LINK:*' : '📄 *CLICK TO VIEW/DOWNLOAD PDF DOCUMENT:*'}\n${cloudUrl}`
      : filePreviewName 
        ? `\n\n📌 *Note:* Please tap the 📎 Attachment paperclip icon in WhatsApp to attach your file ("${filePreviewName}")!`
        : '';

    const waText = 
`🎓 *NEW TUTOR APPLICATION - TEJA HOME TUITIONS*

*Personal Details:*
• Name: ${formData.fullName}
• Gender: ${formData.gender || 'Not specified'}
• Mobile: ${formData.mobileNumber}
• WhatsApp: ${formData.whatsappNumber}
• Email: ${formData.email || 'N/A'}

*Qualification & Experience:*
• Degree: ${formData.qualification}
• Experience: ${formData.experienceYears} Years
• Tuition Mode: ${formData.tuitionMode}

*Subjects & Classes:*
• Subjects: ${selectedSubjects.length ? selectedSubjects.join(', ') : 'None selected'}
• Classes: ${selectedClasses.length ? selectedClasses.join(', ') : 'None selected'}
• Boards: ${selectedBoards.length ? selectedBoards.join(', ') : 'None selected'}

*Hyderabad Localities:*
📍 ${customAreas ? customAreas : 'All Areas'}

*Bio:* ${formData.bio ? formData.bio : 'N/A'}

*📢 Official Tutor WhatsApp Group:*
https://chat.whatsapp.com/LJ9vFZ5b91YJV6rEWt1ZCu`;

    window.open(`https://wa.me/916302664394?text=${encodeURIComponent(waText)}`, '_blank');
    setIsSubmitting(false);

    // Automatic form refresh / reset to clean state
    setFormData({
      fullName: '',
      gender: 'Male',
      mobileNumber: '',
      whatsappNumber: '',
      email: '',
      qualification: 'B.Tech / B.E.',
      experienceYears: '3',
      tuitionMode: 'Online Tuition',
      expectedFee: 'Monthly Salary',
      bio: ''
    });
    setCustomAreas('');
    setSelectedSubjects(['Mathematics', 'Physics']);
    setSelectedClasses(['Class 9', 'Class 10']);
    setSelectedBoards(['CBSE']);

    if (onSuccess) {
      onSuccess({
        title: 'Tutor Application Sent via WhatsApp!',
        message: `Thank you ${formData.fullName}! Your application has been sent to our tutor onboarding team (+91 6302664394).`
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      
      {/* Top Banner */}
      <div className="blue-purple-gradient rounded-3xl p-6 sm:p-10 text-white space-y-3 relative overflow-hidden shadow-xl">
        <div className="flex items-center gap-2">
          <span className="bg-amber-400 text-slate-950 font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider">
            Become a Registered Tutor
          </span>
          <span className="bg-emerald-500/30 text-emerald-200 text-xs px-3 py-1 rounded-full border border-emerald-400/40">
            Earn ₹15,000 - ₹45,000 / month
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-black">Join Teja Home Tuitions Network — Apply as a Home Tutor</h2>
        <p className="text-blue-100 text-sm max-w-2xl">
          Are you a passionate teacher or skilled professional in Hyderabad? Join 500+ verified home and online tutors and get student leads matching your preferred location and timing.
        </p>
      </div>

      {/* Main Registration Form */}
      <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border-2 border-slate-200/90 space-y-8 relative z-20">
        
        {/* Section 1: Personal Contact Details */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
            <UserCheck className="w-5 h-5 text-blue-600" />
            <h3 className="font-extrabold text-slate-900 text-lg">1. Personal & Contact Details</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                placeholder="e.g. Rajesh Sharma"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Gender *
              </label>
              <select
                value={formData.gender}
                onChange={(e) => setFormData({...formData, gender: e.target.value})}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Mobile Number *
              </label>
              <input
                type="tel"
                required
                pattern="[0-9]{10}"
                value={formData.mobileNumber}
                onChange={(e) => setFormData({...formData, mobileNumber: e.target.value})}
                placeholder="10-digit Mobile number"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                WhatsApp Number *
              </label>
              <input
                type="tel"
                required
                pattern="[0-9]{10}"
                value={formData.whatsappNumber}
                onChange={(e) => setFormData({...formData, whatsappNumber: e.target.value})}
                placeholder="WhatsApp enabled number"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="e.g. rajesh.sharma@gmail.com"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

          </div>
        </div>

        {/* Section 2: Qualifications & Experience */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
            <GraduationCap className="w-5 h-5 text-indigo-600" />
            <h3 className="font-extrabold text-slate-900 text-lg">2. Qualification & Teaching Experience</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Highest Qualification *
              </label>
              <select
                value={formData.qualification}
                onChange={(e) => setFormData({...formData, qualification: e.target.value})}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="B.Tech / M.Tech">B.Tech / M.Tech</option>
                <option value="M.Sc / B.Sc">M.Sc / B.Sc</option>
                <option value="M.A / B.A English">M.A / B.A English</option>
                <option value="B.Ed / M.Ed">B.Ed / M.Ed</option>
                <option value="Ph.D">Ph.D</option>
                <option value="M.Com / CA / MBA">M.Com / CA / MBA</option>
                <option value="Other Degree">Other Degree</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Experience (in Years) *
              </label>
              <select
                value={formData.experienceYears}
                onChange={(e) => setFormData({...formData, experienceYears: e.target.value})}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="1">1 Year</option>
                <option value="2">2 Years</option>
                <option value="3">3 - 5 Years</option>
                <option value="6">6 - 10 Years</option>
                <option value="11">10+ Years</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Preferred Mode *
              </label>
              <select
                value={formData.tuitionMode}
                onChange={(e) => setFormData({...formData, tuitionMode: e.target.value})}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="Online Tuition">Online Tuition</option>
                <option value="Home Offline Tuition">Home Offline Tuition</option>
              </select>
            </div>

          </div>
        </div>

        {/* Section 3: Subjects & Classes Choices */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
            <BookOpen className="w-5 h-5 text-amber-600" />
            <h3 className="font-extrabold text-slate-900 text-lg">3. Subjects, Classes & Boards You Teach</h3>
          </div>

          {/* Subjects selection */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Select Subjects You Can Teach (Click to select) *
            </label>
            <div className="flex flex-wrap gap-2">
              {SUBJECTS_LIST.map((sub) => {
                const isSelected = selectedSubjects.includes(sub);
                return (
                  <button
                    key={sub}
                    type="button"
                    onClick={() => toggleItem(selectedSubjects, setSelectedSubjects, sub)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                      isSelected
                        ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {isSelected ? '✓ ' : '+ '}{sub}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Classes selection */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Select Classes / Grades You Handle *
            </label>
            <div className="flex flex-wrap gap-2">
              {CLASSES_LIST.map((cls) => {
                const isSelected = selectedClasses.includes(cls);
                return (
                  <button
                    key={cls}
                    type="button"
                    onClick={() => toggleItem(selectedClasses, setSelectedClasses, cls)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                      isSelected
                        ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {isSelected ? '✓ ' : '+ '}{cls}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Boards selection */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Select Educational Boards *
            </label>
            <div className="flex flex-wrap gap-2">
              {BOARDS_LIST.map((b) => {
                const isSelected = selectedBoards.includes(b);
                return (
                  <button
                    key={b}
                    type="button"
                    onClick={() => toggleItem(selectedBoards, setSelectedBoards, b)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                      isSelected
                        ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-sm'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {isSelected ? '✓ ' : '+ '}{b}
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Section 4: Preferred Areas in Hyderabad */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
            <MapPin className="w-5 h-5 text-red-500" />
            <h3 className="font-extrabold text-slate-900 text-lg">4. Preferred Service Areas in Hyderabad</h3>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Type Hyderabad Localities / Areas where you can provide Home Tuition *
            </label>
            <input
              type="text"
              required
              placeholder="Type your preferred areas (e.g. Gachibowli, Madhapur, Kukatpally, Kondapur...)"
              value={customAreas}
              onChange={(e) => setCustomAreas(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 text-sm font-semibold focus:ring-2 focus:ring-blue-600 focus:outline-none"
            />
            <p className="text-xs text-slate-500 font-medium mt-1.5">
              Enter the Hyderabad areas or localities where you are available to travel for 1-on-1 home tuitions.
            </p>

            {/* Major Hyderabad Service Zones Reference Text Box */}
            <div className="bg-slate-50/90 rounded-2xl p-4 border border-slate-200 space-y-2 mt-3">
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                📍 Major Hyderabad Service Zones (Reference List):
              </span>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Madhapur • Gachibowli • Kondapur • Jubilee Hills • Banjara Hills • Kukatpally • KPHB Colony • Miyapur • Nizampet • Bachupally • Pragathi Nagar • Hafeezpet • Chanda Nagar • Begumpet • Ameerpet • SR Nagar • Panjagutta • Himayatnagar • Narayanguda • Nallakunta • Koti • Abids • Mehdipatnam • Tolichowki • Attapur • Manikonda • Puppalguda • Financial District • Tellapur • Kokapet • Narsingi • Sun City • Rajendra Nagar • LB Nagar • Dilsukhnagar • Kothapet • Nagole • Hayathnagar • Uppal • Tarnaka • Moulali • ECIL • Sainikpuri • AS Rao Nagar • Malkajgiri • Secunderabad • Bowenpally • Alwal • Kompally
              </p>
            </div>
          </div>
        </div>

        {/* Section 5: Profile Bio */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
            <FileText className="w-5 h-5 text-emerald-600" />
            <h3 className="font-extrabold text-slate-900 text-lg">5. Profile Bio & Experience Summary</h3>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Short Teaching Bio / Experience Summary
            </label>
            <textarea
              rows={3}
              value={formData.bio}
              onChange={(e) => setFormData({...formData, bio: e.target.value})}
              placeholder="Tell parents about your teaching style, achievements, and past results..."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>
          </div>
        </div>

        {/* Submit Action */}
        <div className="pt-4 border-t border-slate-200 space-y-4">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>By submitting, you agree to our tutor verification guidelines and privacy terms.</span>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-auto max-w-xs sm:max-w-md bg-[#25D366] hover:bg-[#20ba5a] text-white font-black py-3 sm:py-3.5 px-6 sm:px-8 rounded-xl sm:rounded-2xl shadow-xl flex items-center justify-center gap-2.5 text-sm sm:text-base transition-all border border-white/40 hover:scale-[1.02]"
            >
              <svg className="w-5 h-5 fill-white flex-shrink-0" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>Submit via WhatsApp</span>
            </button>
          </div>
        </div>

      </form>

      {/* COMMUNITY WHATSAPP GROUP BANNER - BELOW JOIN AS A TUTOR */}
      <div className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-slate-950 rounded-xl sm:rounded-3xl p-3 sm:p-8 border border-emerald-500/40 text-white shadow-lg sm:shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-3 sm:gap-6">
        <div className="space-y-1.5 sm:space-y-3 max-w-2xl">
          <span className="bg-amber-400 text-slate-950 font-black text-[9px] sm:text-xs px-2 py-0.5 sm:px-3.5 sm:py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1 sm:gap-1.5 shadow">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> Join Teja Home Tuition Group for Every Update
          </span>
          <h3 className="text-sm sm:text-3xl font-black text-white leading-snug">
            Join Official Teja Home Tuition Community Group
          </h3>
          <p className="text-slate-300 text-[11px] sm:text-sm leading-relaxed">
            Get instant alerts for new home tuition opportunities, student requirements across Hyderabad, location updates, and teacher announcements!
          </p>
        </div>

        <a
          href="https://chat.whatsapp.com/LJ9vFZ5b91YJV6rEWt1ZCu"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full md:w-auto bg-[#25D366] hover:bg-[#20ba5a] text-white font-black px-3.5 sm:px-6 py-2 sm:py-4 rounded-lg sm:rounded-2xl shadow-md transition-all text-[11px] sm:text-base flex items-center justify-center gap-1.5 sm:gap-2.5 shrink-0 border border-white/40 hover:scale-105"
        >
          <MessageSquare className="w-3.5 h-3.5 sm:w-5 sm:h-5 fill-white text-white" />
          <span>Join WhatsApp Group</span>
          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
        </a>
      </div>

    </div>
  );
}
