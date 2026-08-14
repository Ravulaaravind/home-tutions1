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
    tuitionMode: 'Both Home & Online',
    docType: 'Aadhaar Card',
    gender: 'Male',
    bio: ''
  });

  const [selectedSubjects, setSelectedSubjects] = useState(['Mathematics', 'Physics']);
  const [selectedClasses, setSelectedClasses] = useState(['Class 9', 'Class 10']);
  const [selectedBoards, setSelectedBoards] = useState(['CBSE']);
  const [selectedAreas, setSelectedAreas] = useState(['Gachibowli', 'Madhapur', 'Kukatpally']);
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
📍 ${selectedAreas.length ? selectedAreas.join(', ') : 'All Areas'}

*📄 Uploaded ID / Degree Proof:*
${docInfo}${fileLinkSection}

*Bio:* ${formData.bio ? formData.bio : 'N/A'}

*📢 Official Tutor WhatsApp Group:*
https://whatsapp.com/channel/0029VbDY3eJ7DAX4GXRn3v32`;

    window.open(`https://wa.me/916304248840?text=${encodeURIComponent(waText)}`, '_blank');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      
      {/* WHATSAPP TUTOR CHANNEL BANNER - PROFESSIONAL DARK EMERALD GREEN */}
      <div className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-slate-950 rounded-3xl p-6 sm:p-8 text-white shadow-2xl relative overflow-hidden space-y-4 border border-emerald-500/40">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2.5 max-w-xl">
            <span className="bg-amber-400 text-slate-950 font-black text-xs px-3.5 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5 shadow">
              <Sparkles className="w-3.5 h-3.5" /> Official Tutor Group
            </span>
            <h2 className="text-2xl sm:text-3xl font-black leading-tight text-white tracking-tight">
              Join Teja Home Tuitions Group for Every Update
            </h2>
            <p className="text-emerald-100/90 text-xs sm:text-sm leading-relaxed">
              Stay connected with Teja Home Tuitions to receive daily student requirements, new tuition opportunities in Hyderabad, location alerts, and teaching updates!
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1 text-xs text-emerald-300 font-extrabold">
              <span className="flex items-center gap-1">📚 New Student Leads</span>
              <span className="flex items-center gap-1">📍 Location Alerts</span>
              <span className="flex items-center gap-1">💼 Teaching Opportunities</span>
            </div>
          </div>

          <a
            href="https://whatsapp.com/channel/0029VbDY3eJ7DAX4GXRn3v32"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-6 py-4 rounded-2xl shadow-xl flex items-center justify-center gap-2.5 group transition-all text-sm shrink-0 border border-emerald-300/40"
          >
            <MessageSquare className="w-5 h-5 text-slate-950 fill-slate-950" />
            <span>Join Tutor WhatsApp Channel</span>
            <ExternalLink className="w-4 h-4 text-slate-950" />
          </a>
        </div>
      </div>

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

        <h1 className="text-3xl sm:text-4xl font-black">Join Teja Home Tuitions Network</h1>
        <p className="text-blue-100 text-sm max-w-2xl">
          Are you a passionate teacher or skilled professional in Hyderabad? Join 500+ verified home and online tutors and get student leads matching your preferred location and timing.
        </p>
      </div>

      {/* Main Registration Form */}
      <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200 space-y-8">
        
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
                <option value="Both">Home Tuition & Online</option>
                <option value="Home Tuition">Home Tuition Only</option>
                <option value="Online">Online Classes Only</option>
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
              Select Localities where you can provide Home Tuition *
            </label>
            <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto p-2 border border-slate-200 rounded-2xl bg-slate-50">
              {HYDERABAD_LOCATIONS.map((loc) => {
                const isSelected = selectedAreas.includes(loc);
                return (
                  <button
                    key={loc}
                    type="button"
                    onClick={() => toggleItem(selectedAreas, setSelectedAreas, loc)}
                    className={`px-3 py-1 rounded-xl text-xs font-medium transition-all border ${
                      isSelected
                        ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    📍 {loc}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Section 5: ID / Degree Document Upload & Bio */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
            <FileText className="w-5 h-5 text-emerald-600" />
            <h3 className="font-extrabold text-slate-900 text-lg">5. Profile Bio & ID Document Upload</h3>
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

          {/* Document File Uploader */}
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Select Document Type *
              </label>
              <select
                value={formData.docType}
                onChange={(e) => setFormData({...formData, docType: e.target.value})}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="Aadhaar Card">Aadhaar Card (Front & Back)</option>
                <option value="PAN Card">PAN Card</option>
                <option value="Degree Certificate">Highest Degree Certificate</option>
                <option value="Teaching Certificate">B.Ed / Teaching License</option>
                <option value="Resume / CV">Resume / CV Document</option>
                <option value="Other ID Proof">Other Govt ID Proof</option>
              </select>
            </div>

            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Upload Document File (PDF, Image, or Word)
            </label>
            
            <div className="border-2 border-dashed border-emerald-300 rounded-2xl p-6 text-center bg-emerald-50/50 hover:bg-emerald-100/60 transition-colors relative cursor-pointer">
              <input
                type="file"
                onChange={handleFileUpload}
                accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />
              <Upload className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
              {filePreviewName ? (
                <div className="space-y-2">
                  <span className="text-emerald-800 font-black text-sm block flex items-center justify-center gap-1.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" /> Attached: {filePreviewName}
                  </span>
                  
                  {imagePreviewUrl ? (
                    <div className="mt-2 p-2 bg-white rounded-2xl border border-emerald-300 inline-flex items-center gap-3 shadow-md text-left max-w-sm mx-auto relative z-20">
                      <img src={imagePreviewUrl} alt="Document Preview" className="w-16 h-16 object-cover rounded-xl border border-slate-200 shadow flex-shrink-0" />
                      <div className="text-xs">
                        <span className="font-bold text-slate-900 block truncate max-w-[180px]">{filePreviewName}</span>
                        <span className="text-[11px] text-emerald-700 font-semibold block">✓ Image Ready for WhatsApp</span>
                        <span className="text-[10px] text-slate-500 block">Size: {fileSizeText}</span>
                      </div>
                    </div>
                  ) : (
                    <span className="text-xs text-slate-600 block font-semibold">
                      Size: {fileSizeText || 'File ready'} • Click to replace file
                    </span>
                  )}
                </div>
              ) : (
                <div>
                  <span className="text-xs font-bold text-emerald-700 block">Click here to attach document file (PDF / Image)</span>
                  <span className="text-[11px] text-slate-500">PDF, JPG, PNG up to 10MB (Stored & Transmitted Encrypted)</span>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Submit Action */}
        <div className="pt-4 border-t border-slate-200 space-y-4">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>By submitting, you agree to our tutor verification guidelines and privacy terms.</span>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full amber-gradient-btn text-white py-4 rounded-2xl font-bold text-base shadow-xl flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <span>Submitting Application...</span>
            ) : (
              <>
                <UserCheck className="w-5 h-5" />
                <span>Submit Tutor Application</span>
              </>
            )}
          </button>
        </div>

      </form>

    </div>
  );
}
