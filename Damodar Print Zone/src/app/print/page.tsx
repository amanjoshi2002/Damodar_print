'use client';

import { useState, useCallback, useEffect } from 'react';
import { Upload, File, Send, AlertCircle, CheckCircle, Printer, X } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer';

interface FileWithPreview extends File {
  preview?: string;
}

const PrintPage = () => {
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [instructions, setInstructions] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set to true when the component mounts (client-side)
  }, []);

  const onDrop = useCallback((acceptedFiles: FileWithPreview[]) => {
    setFiles(acceptedFiles.map(file => Object.assign(file, {
      preview: URL.createObjectURL(file)
    })));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (files.length === 0) {
      setStatus('error');
      setMessage('Please upload at least one document.');
      return;
    }

    setIsSubmitting(true);
    setStatus('idle');

    const formData = new FormData();
    files.forEach(file => {
      formData.append('files', file);
    });
    formData.append('name', name);
    formData.append('phone', phone);
    formData.append('instructions', instructions);

    try {
      const response = await fetch('/api/contact/print', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('Documents submitted successfully! We will contact you shortly.');
        // Clear form
        setFiles([]);
        setName('');
        setPhone('');
        setInstructions('');
      } else {
        throw new Error(data.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Submission error:', error); // Log the error for debugging
      setStatus('error');
      setMessage('Failed to submit documents. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isClient) {
    return null; // Return nothing during SSR
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8 sm:mb-12"
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-100 text-primary-700">
              <Printer className="w-4 h-4 mr-2 text-black" />
              <span className="text-sm font-medium text-black">Print Service</span>
            </span>
            <h1 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Document Printing Service
            </h1>
            <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Upload your documents for printing. We will contact you with the pricing details.
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* File Upload Area */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Upload Documents <span className="text-red-500">*</span>
                </label>
                <div 
                  className="border-2 border-dashed border-gray-300 rounded-lg p-4 sm:p-6 text-center hover:border-primary-500 transition-colors"
                  onDrop={(e) => {
                    e.preventDefault();
                    onDrop(Array.from(e.dataTransfer.files));
                  }}
                  onDragOver={(e) => e.preventDefault()}
                >
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-3" />
                  <p className="text-sm text-gray-600">
                    Drag and drop your files here, or{' '}
                    <label className="text-primary-600 hover:text-primary-700 cursor-pointer text-blue-600">
                      browse
                      <input
                        type="file"
                        className="hidden"
                        multiple
                        onChange={(e) => e.target.files && onDrop(Array.from(e.target.files))}
                        accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png"
                      />
                    </label>
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    Support for PDF, Word, Excel, and images up to 10MB each
                  </p>
                </div>
              </div>

              {/* File Preview */}
              {files.length > 0 && (
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-700">Selected Files</h3>
                  <div className="grid grid-cols-1 gap-2">
                    {files.map((file) => (
                      <div
                        key={file.name}
                        className="flex items-center p-3 bg-gray-50 rounded-lg"
                      >
                        <File className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {file.name}
                          </p>
                          <p className="text-xs text-black-500">
                            {(file.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => setFiles(files.filter(f => f !== file))}
                          className="text-gray-400 hover:text-red-500 flex-shrink-0"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-primary-500 focus:ring-primary-500"
                    style={{ color: 'black' }}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-primary-500 focus:ring-primary-500"
                    style={{ color: 'black' }}
                    placeholder="Your phone number"
                  />
                </div>
              </div>

              {/* Printing Instructions */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Special Instructions (Optional)
                </label>
                <textarea
                  value={instructions}
                  onChange={(e) => setInstructions(e.target.value)}
                  rows={3}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-primary-500 focus:ring-primary-500"
                  style={{ color: 'black' }}
                  placeholder="Any specific requirements for printing (e.g., color, double-sided, paper size)"
                />
              </div>

              {/* Status Message */}
              {status !== 'idle' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg ${
                    status === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                  }`}
                >
                  <div className="flex items-center">
                    {status === 'success' ? (
                      <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                    )}
                    <p className="text-sm">{message}</p>
                  </div>
                </motion.div>
              )}

              {/* Submit Button */}
              <div className="flex justify-center mt-6">
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  disabled={isSubmitting || files.length === 0}
                  className={`w-full max-w-xs flex items-center justify-center space-x-2 py-3 px-6 rounded-lg transition-colors ${
                    isSubmitting || files.length === 0
                      ? 'bg-gray-400 text-black cursor-not-allowed'
                      : 'bg-primary-600 text-black hover:bg-primary-700'
                  }`}
                >
                  <Send className="w-5 h-5" />
                  <span>{isSubmitting ? 'Submitting...' : 'Submit Documents'}</span>
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer/> 

    </>
  );
};

export default PrintPage;